import { Toggle } from './toggle'

// Toggles
const toggles = new Toggle()

// Tabs
const tabs = new Toggle({
  attr: 'data-tab',
  toggleContainer: '.tabs',
  single: true,
  singleContainer: '.tabs',
  expandOnly: true,
})

// Accordions
const accordions = new Toggle({
  attr: 'data-accordion',
  toggleContainer: '.accordion',
})
