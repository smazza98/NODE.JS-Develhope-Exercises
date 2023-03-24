const express = require('express');
const Joi = require('joi');

const router = express.Router();

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" }
];

// Validation schema for planet fields
const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
});

// GET all planets
router.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});

// GET a planet by id
router.get('/api/planets/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).json({ error: 'Planet not found' });
  res.status(200).json(planet);
});

// POST a new planet
router.post('/api/planets', (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  
  const planet = {
    id: req.body.id,
    name: req.body.name
  };
  planets.push(planet);
  res.status(201).json({ msg: 'Planet created' });
});

// PUT an existing planet by id
router.put('/api/planets/:id', (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).json({ error: 'Planet not found' });

  planet.name = req.body.name;
  res.status(200).json({ msg: 'Planet updated' });
});

// DELETE a planet by id
router.delete('/api/planets/:id', (req, res) => {
  const planetIndex = planets.findIndex(p => p.id === parseInt(req.params.id));
  if (planetIndex === -1) return res.status(404).json({ error: 'Planet not found' });

  planets.splice(planetIndex, 1);
  res.status(200).json({ msg: 'Planet deleted' });
});

module.exports = router;
