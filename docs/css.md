# CSS

<a id="index"></a>

1. [Introduction][section-01]
    - Elements
    - Conflicting rules
    - The box model
    - Accessibility
1. [Handling different text directions][section-02]
1. [Layout][section-03]
1. [Responsive Web Design][section-04]
1. [CSS Methodologies][section-05]
1. [Best practices][section-06]
1. [Bad practices][section-07]

[Home][Home]

## Introduction

**C**ascading **S**tyle **S**heets.<br />
**CSS** describes the **presentation** and **layout** of HTML or XML (SVG, MathML or XHTML) in screen, paper, speech or on other media.

```css
/* CSS Ruleset or CSS Rule */
.selector {
    /* CSS Declaration Blocks */
    property: value; /* CSS Declaration */
    property: value; /* CSS Declaration */
}
```

**US spelling** is the standard.<br />
This language is broken down into **CSS Modules**.<br />
`overflow` establishes a **B**lock **F**ormatting **C**ontext (**BFC**).

### Elements

- **Selectors**:
    - Type, universal, class, ID
    - Attribute
    - Pseudo-classes, pseudo-elements
    - Combinators
- Properties and values
- Functions
- @rules
- Comments

### Conflicting rules

- **Cascade**
    - Source order
    - Specificity
    - Importance
- **Specificity**:
    - *Thousands*: if declaration is inside a style attribute.
    - *Hundreds*: for each ID selector.
    - *Tens*: for each class selector, attribute selector or pseudo-class.
    - *Ones*: for each element selector or pseudo-element.

```
  Thousands   Hundreds      Tens        Ones
+-----------+-----------+-----------+-----------+
|     1     |     1     |     1     |     1     |
+-----------+-----------+-----------+-----------+
```

- **Inheritance**:
    - `inherit`
    - `initial`
    - `unset`
    - `revert`

Resetting all property values:

```css
.selector {
    all: inherit; /* or initial, or unset, or revert */
}
```

### The box model

Display types:

- **Outer** display: `block`, `inline` (normal flow)
- **Inner** display: `flex`, `grid`, `inline-flex`

Thinking inside the box:

- **Margin** box
- **Border** box
- **Padding** box
- **Content** box

To use the alternative box model in all elements:

```css
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
```

### Accessibility

Visitors:

- may well be on a computer with a **mouse** or **trackpad**, or a phone with a **touchscreen**.
- may be using a **screenreader**.
- may need to use much **large text**.
- or be navigating the site using the **keyboard** only.

## Handling different text directions

```css
.selector {
    writing-mode: horizontal-tb;
    writing-mode: vertical-rl;
    writing-mode: vertical-lr;
}
```

Horizontal writing mode:

```
     Inline size
+-------------------+
|                   |
|                   | Block size
|                   |
+-------------------+
```

Vertical writing mode:

```
  Block size
+------------+
|            |
|            |
|            |
|            | Inline size
|            |
|            |
|            |
+------------+
```

Logical properties:

- `block-size`
- `inline-size`
- `...-block-start`
- `...-block-end`
- `...-inline-start`
- `...-inline-end`

## Layout

Normal flow:

- **Block** and **inline** direction.
- Starting with a solid, well-structured document that's readable in normal flow is the best way **to begin** any webpage.
- **Margin collapsing**.

Display property:

- `block`
- `inline`
- `inline-block`

Flexbox:

```
               main axis
|<----------------------------------->|
|                                     |
╔═════════════════════════════════════╗----- <- cross start
║ flex container                      ║    ↑
║                                     ║    |
║ ╔═══════════╗ ╔═══════════╗--       ║    |
║ ║ flex item ║ ║ flex item ║ ↑ cross ║    | cross
║ ║           ║ ║           ║ ↓ size  ║    | axis
║ ╚═══════════╝ ╚═══════════╝--       ║    |
║               |<--------->|         ║    |
║                 main size           ║    |
║                                     ║    ↓
╚═════════════════════════════════════╝----- <- cross end
↑                                     ↑
+- main start                         +- main end
```

Grid:

```
+--+  +--+  +--+  +--+  +--+  +--+
|██|██|██|██|██|██|██|██|██|██|██|<--+
|##|  |##|  |##|  |##|  |##|  |##|<--|-- Gutter between rows
|██|██|██|██|██|██|██|  |██|██|██|   |
|██|██|██|██|██|██|██|  |██|██|██|   |
|██|██|██|██|██|██|██|  |██|██|██|<--+-- Rows of content arranged on the grid
|██|██|██|██|██|██|██|  |██|██|██|
|##|  |##|  |##|  |##|  |##|  |##|
|##|  |##|  |##|  |##|  |##|  |##|
+--+  +--+  +--+  +--+  +--+  +--+
 ↑     ↑     ↑         ↑     ↑
 |     |     |         +-----+-- Gutters
 +-----+-----+-- Columns
```

Floats:

- The effect of text wrapped around the boxed element.

Positioning:

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

Table layout.<br />
Multiple column layout.

## Responsive Web Design

- **Liquid** or **fixed width** site.
- Responsive design in 2010:
    - **Fluid grids** (using floats)
    - **Fluid images** (`max-width: 100%`)
    - **Media query** (instead JS)

The text will still be zoomable:

```css
.selector {
    font-size: calc( 1.5rem + 3vw );
}
```

- **Mobile first** responsive design is quite often the best approach to follow.

## CSS Methodologies

- Object Oriented CSS (**OOCSS**)
- Block Element Modifier (**BEM**)
- Scalable and Modular Architecture for CSS (**SMACSS**)
- Inverted Triangle architecture for CSS (**ITCSS**)
- Atomic CSS (**ACSS**)

## Best practices

- Write **comments** along with CSS:
    - Add block of comments between **logical sections**.
    - The things where you made a **particular decision** for a reason.
    - Add the **URL of the tutorial** to the comments.

```css
/* || General styles */
/* || Typography */
/* || Header and Main Navigation */
```

```css
/* || GENERAL STYLES */
/* || UTILITIES */
/* || SITEWIDE */
/* || STORE PAGE */
```

- Test in many **different** browsers.
- Always keep **overflow** in mind:
    - Test designs with large and small amounts of content.
    - Increase the font sizes of text.
    - Generally ensure that your CSS works in a robust way.
    - Hide content, or add scrollbars, is likely to be reserved for a few select use cases.
- You should take care when changing the styling of **form elements** to make sure it is still obvious to the user they are **form elements**.
- **Normalizing** stylesheets to create a set of baselines styles to use on all projects.
- For **tables**: `border-collapse: collapse`.
- **Consistency** is important: **coding style guide**.
- Avoid **overly-specific** selectors.
- **Break** large stylesheets into multiple smaller ones.

Text:

- Web **safe fonts**:
    - Sans-serif: `Helvetica, Arial, sans-serif`
    - Serif: `Times New Roman, Times, serif`
    - Monospace: `Courier New, Courier, monospace`
- Avoid low contrast, better **high contrast**; medium contrast for long spans of text.
- If text is a light color on a dark background then increase the **height** between lines and the **weight** of the font.
- Offer a **fallback** for better compatibility in browsers.
- Use **serif fonts** for long texts.
- To improve **readability** with uppercase, looking at the kerning value.
- Increase the default amount of leading, set **line-height** with 1.4 - 1.5em.
- The recommended **line-height** is around 1.5 - 2 (double spaced).
- If kerning value is changed then adjust the **word-spacing** property.
- Use **underlining** for links, but not for other things. If you don't want to underline links, at least highlight them in some other way.
- Make them react in some way when **hovered/focused**, and in a slightly different way when **activated**.
- Order to style links: <em>**L**o**V**e **F**ears **HA**te</em>.

RWD:

- Instead of targeting **specific sizes** for all designs, a better approach is to change the design at the size **where the content starts to break** in some way.

## Bad practices

- Using **inline styles**.
- Using `!important`.

[Home][Home] - [Top][Index]

<!-------------------------------------------------------------------------
 !  Links
-------------------------------------------------------------------------->

[Home]:         ../README.md
[Index]:        #index

[section-01]:   #introduction
[section-02]:   #handling-different-text-directions
[section-03]:   #layout
[section-04]:   #responsive-web-design
[section-05]:   #css-methodologies
[section-06]:   #best-practices
[section-07]:   #bad-practices
