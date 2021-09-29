const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    //res.json(`${req.method} request received to get categories`);
    let data = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }

  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  const data = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  res.status(200).json(data);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  //res.json(`${req.method} request was received to add a new category`);
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(`${req.method} request was received to update a category`);
  } catch (error) {
    res.status(500).json(error);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Category.destroy({ where: { id: req.params.id } });
    res.json(`${req.method} request was received to delete a category`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // delete a category by its `id` value
});

module.exports = router;
