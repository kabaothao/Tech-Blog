const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    let data = await Tag.findAll({
      include: [{ model: Product, as: "Product" }],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  const data = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, as: "Product" }],
  });
  res.status(200).json(data);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const data = await Tag.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(`${req.method} request was received to update a tag`);
  } catch (error) {
    res.status(500).json(error);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Tag.destroy({ where: { id: req.params.id } });
    res.json(`${req.method} request was received to delete a tag`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // delete on tag by its `id` value
});

module.exports = router;
