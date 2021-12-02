# CSS Notes

Typical css notation:

    element {
        property: value;
    }

## Types, in order of specificity
### Universal and Element Selectors

    * {
        property: value;
    }

### Class Selectors

    .class {
        property: value;
    }

### ID Selector

    #id {
        property: value
    }

### Dependants
    span p {
        property: value;
    }

### Adjacency
    h1 + p {
        property: value;
    }

### Direct Inheritance
    ul > li {
        property: value;
    }

### Attribute Selector

    label[type="text"] {
        property: value;
    }

### Pseudo Classes

    button:hover {
        property: value;
    }

### Pseudo Elements
    h1::first-letter {
        property: value;
    }

or

    ::selection {
        property: value;
    }

### Property Inheritance
Generally inheritance as follows: `!important` > `#ID` > `.class` > `element`.

## CSS Box Model

| [box] | | [box]  |
border padding box padding border margin border padding box padding border 