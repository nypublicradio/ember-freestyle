export default {
  title: 'Ember Freestyle Styleguide',
  components: [
    {
      name: 'freestyle-headers',
      attrs: {
        h1: 'Ember Freestyle Header 1',
        h2: 'Ember Freestyle Header 2',
        h3: 'Ember Freestyle Header 3',
        h4: 'Ember Freestyle Header 4',
        h5: 'Ember Freestyle Header 5',
        h6: 'Ember Freestyle Header 6'
      }
    },
    {
      name: 'freestyle-palette',
      attrs: {
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
      },
      arrayAttrs: ['colors'],
      exampleUsage: false
    }
  ]
};
