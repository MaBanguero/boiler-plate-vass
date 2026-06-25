# Testimonials Block (Edge Delivery Services)

The **Testimonials Block** allows content authors to showcase customer reviews, quotes, or team feedback in a clean, modular layout. It supports both static authoring via document tables and dynamic loading via spreadsheet-generated JSON.

---

## 📄 Authoring Guide

Authors can instantiate this block in Google Docs or Microsoft Word by creating a standard table. The first row must contain the block name: `Testimonials`.

### Table Structure
* **Row 1:** `Testimonials` (Add options inside parentheses if needed, e.g., `Testimonials (slider)`).
* **Subsequent Rows:** Each row represents a single testimonial card.
    * **Column 1:** Author Details (Name, Role, Images, etc.).
    * **Column 2:** Testimonial content/quote.

### Example in Document:

| Testimonials | |
| :--- | :--- |
| **Marvin Banguero** <br> *Senior Developer* | "Edge Delivery Services provides unmatched performance. The DOM structure is incredibly lightweight." |
| **Jane Doe** <br> *Product Owner* | "The speed of content updates through document-based authoring is a game-changer for our marketing team." |

---

## 🛠️ Developer Technical Details

This block converts the raw HTML table injected by the AEM pipeline into a semantic and highly optimized DOM structure, strictly adhering to **Core Web Vitals** performance requirements.

### DOM Transformation

**Before Decoration (Raw AEM Output):**
```html
<div class="testimonials" data-block-name="testimonials">
  <div>
    <div><p><strong>Marvin Banguero</strong><br><em>Senior Developer</em></p></div>
    <div><p>"Edge Delivery Services provides unmatched performance..."</p></div>
  </div>
</div>
