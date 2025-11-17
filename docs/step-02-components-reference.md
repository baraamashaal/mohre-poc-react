# Step 02: AEGOV Components - Complete HTML Reference

**Date:** 2025-11-17
**Status:** ✅ Completed
**Purpose:** Comprehensive HTML code examples for all 28 AEGOV components to use as reference for React conversion.

---

## Table of Contents

### Form & Input Components
1. [Input](#1-input-component)
2. [Textarea](#2-textarea-component)
3. [Checkbox](#3-checkbox-component)
4. [Radio](#4-radio-component)
5. [Select](#5-select-component)
6. [File Input](#6-file-input-component)
7. [Toggle](#7-toggle-component)
8. [Range Slider](#8-range-slider-component)

### Navigation Components
9. [Navigation](#9-navigation-component)
10. [Dropdown](#10-dropdown-component)
11. [Breadcrumbs](#11-breadcrumbs-component)
12. [Pagination](#12-pagination-component)
13. [Tabs](#13-tabs-component)
14. [Steps](#14-steps-component)

### Feedback Components
15. [Alert](#15-alert-component)
16. [Toast](#16-toast-component)
17. [Modal](#17-modal-component)
18. [Popover](#18-popover-component)
19. [Tooltip](#19-tooltip-component)

### Content & Display Components
20. [Button](#20-button-component)
21. [Card](#21-card-component)
22. [Badge](#22-badge-component)
23. [Banner](#23-banner-component)
24. [Blockquote](#24-blockquote-component)
25. [Hyperlink](#25-hyperlink-component)
26. [Avatar](#26-avatar-component)
27. [Accordion](#27-accordion-component)
28. [Slider](#28-slider-component)

---

## 1. Input Component

### Basic Input Structure
```html
<div class="aegov-form-control">
  <label for="first_name">First Name</label>
  <div class="form-control-input">
    <input type="text" id="first_name" placeholder="Your first name">
  </div>
</div>
```

### Input with Helper Text
```html
<div class="aegov-form-control">
  <label for="email_address">Email address</label>
  <div class="form-control-input">
    <input type="text" id="email_address" placeholder="Enter your email address">
  </div>
  <p class="mt-2 text-xs leading-6 text-aeblack-500">
    We require your email address to send you important updates.
  </p>
</div>
```

### Input with Error State
```html
<div class="aegov-form-control control-error">
  <label for="error_input">First Name</label>
  <div class="form-control-input">
    <input type="text" id="error_input" placeholder="Error Input">
  </div>
  <p class="error-message">
    <strong>Error:</strong> We encountered a problem with your input.
  </p>
</div>
```

### Input with Prefix Icon
```html
<div class="aegov-form-control">
  <label for="search_prefix">Prefix</label>
  <div class="form-control-input">
    <span class="control-prefix">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Search icon SVG -->
      </svg>
    </span>
    <input type="search" id="search_prefix" placeholder="Search for something">
  </div>
</div>
```

### Input with Suffix Icon
```html
<div class="aegov-form-control">
  <label for="search_suffix">Suffix</label>
  <div class="form-control-input">
    <input type="search" id="search_suffix" placeholder="Search for something">
    <span class="control-suffix">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Icon SVG -->
      </svg>
    </span>
  </div>
</div>
```

### Size Variations

**Small:**
```html
<div class="aegov-form-control control-sm">
  <label for="description-sm">Description</label>
  <div class="form-control-input">
    <input type="text" id="description-sm" placeholder="Enter text">
  </div>
</div>
```

**Base (Default):**
```html
<div class="aegov-form-control">
  <label for="description-base">Description</label>
  <div class="form-control-input">
    <input type="text" id="description-base" placeholder="Enter text">
  </div>
</div>
```

**Large:**
```html
<div class="aegov-form-control control-lg">
  <label for="description-lg">Description</label>
  <div class="form-control-input">
    <input type="text" id="description-lg" placeholder="Enter text">
  </div>
</div>
```

### Secondary Colour Variant
```html
<div class="aegov-form-control control-secondary">
  <label for="first_name_sec">First Name</label>
  <div class="form-control-input">
    <input type="text" id="first_name_sec" placeholder="Your First Name">
  </div>
</div>
```

### Disabled State
```html
<div class="aegov-form-control">
  <label for="disabled_input">First Name</label>
  <div class="form-control-input">
    <input type="text" id="disabled_input" disabled aria-disabled="true" placeholder="Disabled">
  </div>
</div>
```

### Advanced Input Types

**Website with Prefix:**
```html
<div class="aegov-form-control">
  <label for="website">Website</label>
  <div class="form-control-input">
    <span class="control-prefix">http://</span>
    <input type="url" id="website" placeholder="www.example.com">
  </div>
</div>
```

**Date Input:**
```html
<div class="aegov-form-control">
  <label for="date_input">Select a date</label>
  <div class="form-control-input">
    <input type="date" id="date_input">
  </div>
</div>
```

**Password with Icon:**
```html
<div class="aegov-form-control">
  <label for="password_input">Password</label>
  <div class="form-control-input">
    <input type="password" id="password_input" placeholder="">
    <span class="control-suffix">
      <!-- Eye icon SVG -->
    </span>
  </div>
</div>
```

**RTL Arabic Example:**
```html
<div class="aegov-form-control">
  <label for="first_name_ar">الاسم الأول</label>
  <div class="form-control-input">
    <input type="text" id="first_name_ar" placeholder="أدخل اسمك الأول">
  </div>
</div>
```

### Key Classes
- `.aegov-form-control` — wrapper container
- `.form-control-input` — input container
- `.control-error` — error state styling
- `.control-prefix` / `.control-suffix` — icon/text placement
- `.control-sm` / `.control-base` / `.control-lg` — sizing
- `.control-secondary` — secondary color variant

---

## 2. Textarea Component

### Basic Textarea
```html
<div class="aegov-form-control">
  <label for="message">Your message</label>
  <div class="form-control-input">
    <textarea id="message" rows="4" placeholder="Leave a comment..."></textarea>
  </div>
</div>
```

### With Helper Text
```html
<div class="aegov-form-control">
  <label for="message_help">Your message</label>
  <div class="form-control-input">
    <textarea id="message_help" rows="4" placeholder="Write your thoughts here..."></textarea>
  </div>
  <p class="mt-2 text-xs leading-6 text-aeblack-500">
    Please provide as much detail as possible.
  </p>
</div>
```

### With Error State
```html
<div class="aegov-form-control control-error">
  <label for="message_error">Your message</label>
  <div class="form-control-input">
    <textarea id="message_error" rows="4" placeholder="Leave a comment..."></textarea>
  </div>
  <p class="error-message">
    <strong>Error:</strong> Message is required.
  </p>
</div>
```

### Size Variations

**Small:**
```html
<div class="aegov-form-control control-sm">
  <label for="message-sm">Your message</label>
  <div class="form-control-input">
    <textarea id="message-sm" rows="4" placeholder="Leave a comment..."></textarea>
  </div>
</div>
```

**Large:**
```html
<div class="aegov-form-control control-lg">
  <label for="message-lg">Your message</label>
  <div class="form-control-input">
    <textarea id="message-lg" rows="4" placeholder="Leave a comment..."></textarea>
  </div>
</div>
```

### Secondary Variant
```html
<div class="aegov-form-control control-secondary">
  <label for="message-sec">Your message</label>
  <div class="form-control-input">
    <textarea id="message-sec" rows="4" placeholder="Leave a comment..."></textarea>
  </div>
</div>
```

### Disabled State
```html
<div class="aegov-form-control">
  <label for="message-disabled">Your message</label>
  <div class="form-control-input">
    <textarea id="message-disabled" rows="4" disabled aria-disabled="true" placeholder="Disabled"></textarea>
  </div>
</div>
```

---

## 3. Checkbox Component

### Basic Structure
```html
<div class="aegov-check-item">
  <input id="checkbox1" type="checkbox" value="1">
  <label for="checkbox1">I would prefer option 1</label>
</div>
```

### With Link in Label
```html
<div class="aegov-check-item">
  <input id="link-checkbox" type="checkbox" value="0">
  <label for="link-checkbox">I agree with the <a href="#">terms and conditions.</a></label>
</div>
```

### With Additional Description
```html
<div class="aegov-check-group">
  <input checked id="alert-checkbox" aria-describedby="alert-checkbox-description"
         name="alert-checkbox" value="1" type="checkbox">
  <div>
    <label for="alert-checkbox">Alerts</label>
    <p id="alert-checkbox-description">Get notified when there is a critical issue.</p>
  </div>
</div>
```

### List Element Variation
```html
<div class="divide-y divide-aeblack-100">
  <div class="aegov-check-group group-list">
    <label for="person-1" id="person-1-description">Abdullah Al Mehri</label>
    <input id="person-1" aria-describedby="person-1-description"
           name="person-1" value="1" type="checkbox">
  </div>
</div>
```

### Size Variations

**Large:**
```html
<div class="aegov-check-item check-lg">
  <input id="large-checkbox" type="checkbox" value="1">
  <label for="large-checkbox">Large checkbox</label>
</div>
```

**Small:**
```html
<div class="aegov-check-item check-sm">
  <input id="small-checkbox" type="checkbox" value="1">
  <label for="small-checkbox">Small checkbox</label>
</div>
```

### Secondary Variant
```html
<div class="aegov-check-item check-secondary">
  <input checked id="sec-checkbox" type="checkbox" value="1">
  <label for="sec-checkbox">Secondary checkbox</label>
</div>
```

### Disabled States
```html
<div class="aegov-check-item">
  <input disabled id="disabled-checkbox" aria-disabled="true" type="checkbox" value="1">
  <label for="disabled-checkbox">Disabled checkbox</label>
</div>

<div class="aegov-check-item">
  <input disabled checked id="disabled-checked" aria-disabled="true" type="checkbox" value="1">
  <label for="disabled-checked">Disabled checked</label>
</div>
```

---

## 4. Radio Component

### Basic Radio Group
```html
<fieldset>
  <legend class="mb-4 text-base font-semibold">Choose an option</legend>
  <div class="flex flex-col gap-y-3">
    <div class="aegov-radio-item">
      <input id="radio-1" checked type="radio" name="radio-group-1" value="1">
      <label for="radio-1">Option 1</label>
    </div>
    <div class="aegov-radio-item">
      <input id="radio-2" type="radio" name="radio-group-1" value="2">
      <label for="radio-2">Option 2</label>
    </div>
  </div>
</fieldset>
```

### With Description
```html
<div class="aegov-radio-group">
  <input checked id="radio-desc-1" aria-describedby="radio-desc-1-description"
         name="radio-group-2" value="1" type="radio">
  <div>
    <label for="radio-desc-1">Option 1</label>
    <p id="radio-desc-1-description">Description for option 1</p>
  </div>
</div>
```

### List Element Variation
```html
<div class="divide-y divide-aeblack-100">
  <div class="aegov-radio-group group-list">
    <label for="radio-list-1" id="radio-list-1-desc">Option name</label>
    <input id="radio-list-1" aria-describedby="radio-list-1-desc"
           name="radio-list" value="1" type="radio">
  </div>
</div>
```

### Size Variations

**Large:**
```html
<div class="aegov-radio-item radio-lg">
  <input id="large-radio" type="radio" name="size-demo" value="1">
  <label for="large-radio">Large radio</label>
</div>
```

**Small:**
```html
<div class="aegov-radio-item radio-sm">
  <input id="small-radio" type="radio" name="size-demo" value="2">
  <label for="small-radio">Small radio</label>
</div>
```

### Secondary Variant
```html
<div class="aegov-radio-item radio-secondary">
  <input checked id="sec-radio" type="radio" name="sec-demo" value="1">
  <label for="sec-radio">Secondary radio</label>
</div>
```

### Disabled States
```html
<div class="aegov-radio-item">
  <input disabled id="disabled-radio" aria-disabled="true" type="radio" value="1">
  <label for="disabled-radio">Disabled radio</label>
</div>

<div class="aegov-radio-item">
  <input disabled checked id="disabled-checked-radio" aria-disabled="true" type="radio" value="2">
  <label for="disabled-checked-radio">Disabled checked</label>
</div>
```

### RTL Support
```html
<div class="aegov-radio-item">
  <input id="radio-ar" type="radio" name="rtl-demo" value="1">
  <label for="radio-ar">الخيار الأول</label>
</div>
```

---

## 5. Select Component

### Basic Select
```html
<div class="aegov-form-control">
  <label for="countries">Select an option</label>
  <div class="form-control-input">
    <select id="countries">
      <option>United Arab Emirates</option>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
    </select>
  </div>
</div>
```

### Multi-Select
```html
<div class="aegov-form-control">
  <label for="countries-multiple">Countries</label>
  <div class="form-control-input">
    <select multiple id="countries-multiple" size="5">
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  </div>
</div>
```

### With Error State
```html
<div class="aegov-form-control control-error">
  <label for="select-error">Select an option</label>
  <div class="form-control-input">
    <select id="select-error">
      <option>Choose a country</option>
      <option>United States</option>
      <option>Canada</option>
    </select>
  </div>
  <p class="error-message">
    <strong>Error:</strong> Please select a country.
  </p>
</div>
```

### Size Variations

**Small:**
```html
<div class="aegov-form-control control-sm">
  <label for="select-sm">Small select</label>
  <div class="form-control-input">
    <select id="select-sm">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
</div>
```

**Large:**
```html
<div class="aegov-form-control control-lg">
  <label for="select-lg">Large select</label>
  <div class="form-control-input">
    <select id="select-lg">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
</div>
```

### Secondary Variant
```html
<div class="aegov-form-control control-secondary">
  <label for="select-sec">Secondary select</label>
  <div class="form-control-input">
    <select id="select-sec">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
</div>
```

### RTL Support
```html
<div class="aegov-form-control">
  <label for="select-ar">اختر خيارًا</label>
  <div class="form-control-input">
    <select id="select-ar">
      <option>الإمارات العربية المتحدة</option>
      <option>المملكة العربية السعودية</option>
    </select>
  </div>
</div>
```

---

## 6. File Input Component

### Basic File Input
```html
<div class="aegov-form-control">
  <label for="file-input">Upload file</label>
  <div class="form-control-input">
    <input id="file-input" type="file">
  </div>
</div>
```

### With File Summary
```html
<div class="aegov-form-control">
  <label for="file-summary">Upload file</label>
  <div class="form-control-input">
    <input id="file-summary" type="file">
  </div>
  <p class="mt-1 text-xs text-aeblack-500" id="file-summary-help">
    SVG, PNG, JPG or GIF (MAX. 800x400px).
  </p>
</div>
```

### Image Upload
```html
<div class="aegov-form-control">
  <label for="image-upload">Upload image</label>
  <div class="form-control-input">
    <input id="image-upload" type="file" accept="image/*">
  </div>
</div>
```

### Drag & Drop (requires custom JS)
```html
<div class="aegov-form-control">
  <label for="dropzone-file">Drop files here</label>
  <div class="form-control-input flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-aeblack-300 border-dashed rounded-lg cursor-pointer bg-aeblack-50 hover:bg-aeblack-100">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg class="w-8 h-8 mb-4 text-aeblack-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
        </svg>
        <p class="mb-2 text-sm text-aeblack-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
        <p class="text-xs text-aeblack-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
    </label>
  </div>
</div>
```

### Size Variations

**Small:**
```html
<div class="aegov-form-control control-sm">
  <label for="file-sm">Upload file</label>
  <div class="form-control-input">
    <input id="file-sm" type="file">
  </div>
</div>
```

**Large:**
```html
<div class="aegov-form-control control-lg">
  <label for="file-lg">Upload file</label>
  <div class="form-control-input">
    <input id="file-lg" type="file">
  </div>
</div>
```

### Secondary Variant
```html
<div class="aegov-form-control control-secondary">
  <label for="file-sec">Upload file</label>
  <div class="form-control-input">
    <input id="file-sec" type="file">
  </div>
</div>
```

---

## 7. Toggle Component

### Basic Toggle
```html
<label class="aegov-toggle">
  <input type="checkbox" class="sr-only">
  <div class="toggle-switch"></div>
</label>
```

### With Text
```html
<label class="aegov-toggle toggle-with-text">
  <input type="checkbox" class="sr-only">
  <div class="toggle-switch"></div>
  <span class="toggle-label">Toggle me</span>
</label>
```

### With Icons
```html
<label class="aegov-toggle toggle-with-icons">
  <input type="checkbox" class="sr-only">
  <div class="toggle-switch">
    <svg class="toggle-icon-unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- X icon -->
    </svg>
    <svg class="toggle-icon-checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Check icon -->
    </svg>
  </div>
</label>
```

### Success Variant
```html
<label class="aegov-toggle toggle-success">
  <input type="checkbox" checked class="sr-only">
  <div class="toggle-switch"></div>
  <span class="toggle-label">Enabled</span>
</label>
```

### Dark Mode Toggle
```html
<label class="aegov-toggle toggle-mode">
  <input type="checkbox" class="sr-only">
  <div class="toggle-switch">
    <svg class="toggle-icon-unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Sun icon -->
    </svg>
    <svg class="toggle-icon-checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Moon icon -->
    </svg>
  </div>
</label>
```

### Secondary Variant
```html
<label class="aegov-toggle toggle-secondary">
  <input type="checkbox" class="sr-only">
  <div class="toggle-switch"></div>
  <span class="toggle-label">Secondary toggle</span>
</label>
```

---

## 8. Range Slider Component

### Basic Range Slider
```html
<div class="aegov-form-control">
  <label for="range-slider">Select a value</label>
  <div class="form-control-input">
    <input id="range-slider" type="range" min="0" max="100" value="50" class="aegov-range">
  </div>
</div>
```

### With Output Display
```html
<div class="aegov-form-control">
  <div class="flex items-center justify-between mb-2">
    <label for="range-output">Volume</label>
    <output for="range-output" class="text-sm font-medium">50</output>
  </div>
  <div class="form-control-input">
    <input id="range-output" type="range" min="0" max="100" value="50" class="aegov-range"
           oninput="this.previousElementSibling.querySelector('output').value = this.value">
  </div>
</div>
```

### Secondary Variant
```html
<div class="aegov-form-control">
  <label for="range-sec">Select a value</label>
  <div class="form-control-input">
    <input id="range-sec" type="range" min="0" max="100" value="50" class="aegov-range range-secondary">
  </div>
</div>
```

### Disabled State
```html
<div class="aegov-form-control">
  <label for="range-disabled">Disabled</label>
  <div class="form-control-input">
    <input id="range-disabled" type="range" min="0" max="100" value="50" class="aegov-range" disabled aria-disabled="true">
  </div>
</div>
```

---

## 9. Navigation Component

### Basic Navigation Structure

```html
<nav class="main-navigation" aria-label="Main navigation">
  <div class="menu-main-menu-container">
    <ul class="menu nav-menu lg:flex lg:items-center lg:gap-1 xl:gap-2">
      <li class="menu-item lg:inline-flex lg:items-center has-link-icon active-page">
        <a href="#" class="hover:!text-primary-800 hover:!border-primary-800">
          <svg aria-hidden="true" class="text-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <!-- Home icon SVG -->
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li class="menu-item group">
        <a href="#" class="group-hover:!text-primary-800 group-hover:!border-primary-800">Our services</a>
      </li>
    </ul>
  </div>
</nav>
```

### Desktop Navigation with Secondary Menu

```html
<div class="header-navs-right">
  <ul class="flex items-center">
    <li>
      <a href="#" data-tooltip-placement="bottom" data-tooltip-target="tooltip-login"
         class="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center justify-center flex-shrink-0">
        <svg class="flex-shrink-0 w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <!-- User icon -->
        </svg>
        <span class="sr-only">Login</span>
      </a>
      <div id="tooltip-login" role="tooltip" class="z-50 aegov-tooltip">
        Login
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </li>
  </ul>
</div>
```

### Mobile Navigation with Hamburger Menu

```html
<button data-modal-target="openNav" data-modal-toggle="openNav"
        class="hamburger-icon text-aeblack-700">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Three-line hamburger icon -->
  </svg>
  <span class="sr-only">Toggle main menu</span>
</button>

<div id="openNav" tabindex="-1" aria-hidden="true"
     class="responsive-menu hidden lg:hidden max-lg:py-4 max-lg:bg-whitely-50
            max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:z-50">
  <!-- Mobile menu content -->
</div>
```

### Dropdown Navigation (Desktop Hover)

```html
<li class="menu-item relative lg:inline-flex lg:items-center menu-item-has-children group">
  <a href="" data-dropdown-toggle="OurServicesHover"
     data-dropdown-trigger="hover"
     class="group-hover:!text-primary-800 group-hover:!border-primary-800">
    Our services
  </a>
  <button id="OurServicesMenus" data-dropdown-toggle="OurServicesHover"
          class="submenu-btn flex-shrink-0 group-hover:!text-primary-800">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Chevron down icon -->
    </svg>
  </button>
  <div id="OurServicesHover" class="submenu hidden lg:py-4 xl:py-5 rounded-bordered">
    <div class="[&>div]:p-3 [&>div]:w-72 lg:flex lg:flex-wrap">
      <ul class="space-y-1.5 xl:space-y-2">
        <li class="menu-item"><a href="">Some Service Item Label</a></li>
      </ul>
    </div>
  </div>
</li>
```

### Mobile Accordion Navigation

```html
<li class="menu-item relative menu-item-has-children">
  <a href="">Our services</a>
  <button class="submenu-btn flex-shrink-0" id="accordionOurServices"
          data-accordion-target="#accordion-collapse-service"
          aria-controls="accordion-collapse-service">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Chevron icon -->
    </svg>
  </button>
  <div id="accordion-collapse-service" class="submenu hidden bg-transparent"
       aria-labelledby="accordionOurServices">
    <ul class="space-y-1.5">
      <li class="menu-item"><a href="">Sub Item</a></li>
    </ul>
  </div>
</li>
```

### Mega Menu Structure

```html
<div id="AboutUsHover" class="submenu hidden lg:py-4 xl:py-5 rounded-bordered">
  <div class="[&>div]:p-3 [&>div]:w-52 lg:flex lg:flex-wrap lg:grid-cols-4"
       aria-labelledby="AboutUsMenus">
    <div>
      <h2 class="submenu-title">Cities</h2>
      <ul class="space-y-1.5 xl:space-y-2">
        <li class="menu-item"><a href="">Dubai</a></li>
        <li class="menu-item"><a href="">Abu Dhabi</a></li>
      </ul>
    </div>
  </div>
</div>
```

### Key Classes

- `.main-navigation` — Main nav container
- `.menu-item` — Individual menu item
- `.menu-item-has-children` — Parent menu item with submenu
- `.active-page` — Current page indicator
- `.submenu` — Dropdown submenu container
- `.submenu-btn` — Toggle button for submenu
- `.submenu-title` — Submenu section heading
- `.hamburger-icon` — Mobile menu toggle
- `.responsive-menu` — Mobile navigation modal
- `.has-link-icon` — Menu item with icon

### Key Attributes

- `aria-label="Main navigation"` — Navigation landmark
- `data-dropdown-toggle` — Links to dropdown menu
- `data-dropdown-trigger="hover"` — Desktop hover behavior
- `data-accordion-target` — Mobile accordion toggle
- `aria-controls` — Links control to target
- `sr-only` — Screen reader only text

---

## 10. Dropdown Component

### Basic Dropdown Structure

```html
<!-- Trigger Button -->
<button id="dropdownButton" data-dropdown-toggle="dropdown" class="aegov-btn" type="button">
  Dropdown
  <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
  </svg>
</button>

<!-- Dropdown Menu -->
<div id="dropdown" class="aegov-dropdown hidden w-52">
  <div class="dropdown-body text-aeblack-600">
    <ul class="py-1" aria-labelledby="dropdownButton" role="menu">
      <li><a href="#" class="dropdown-item">An item</a></li>
      <li><a href="#" class="dropdown-item">An item</a></li>
      <li><a href="#" class="dropdown-item">An item</a></li>
    </ul>
  </div>
</div>
```

### With Header and Dividers

```html
<button id="dropdownButton-2" data-dropdown-toggle="dropdownHeaderDividerIcon" class="aegov-btn" type="button">
  Open dropdown
  <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
  </svg>
</button>

<div id="dropdownHeaderDividerIcon" class="aegov-dropdown hidden w-52">
  <div class="dropdown-header">
    <div class="text-sm">Signed in as</div>
    <div class="font-bold truncate">john@example.com</div>
  </div>
  <div class="dropdown-body divide-y divide-aeblack-50 text-aeblack-600">
    <ul class="py-1" role="menu" aria-labelledby="dropdownButton-2">
      <li><a href="#" class="dropdown-item">Menu item</a></li>
    </ul>
  </div>
</div>
```

### With Checkboxes

```html
<button id="dropdownButton-5" data-dropdown-toggle="dropdownCheckboxes" class="aegov-btn" type="button">
  Open dropdown
  <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
  </svg>
</button>

<div id="dropdownCheckboxes" class="aegov-dropdown hidden w-80">
  <div class="dropdown-body mb-4">
    <div class="aegov-check-group rounded-md hover:bg-aeblack-50 px-5 pt-4 pb-2">
      <input id="comments" name="comments" type="checkbox">
      <div>
        <label for="comments">Comments</label>
        <p id="comments-description" class="text-sm">Get notified when someones posts a comment on a posting.</p>
      </div>
    </div>
  </div>
</div>
```

### Hover Trigger

```html
<button id="dropdownButton-8" data-dropdown-trigger="hover" data-dropdown-toggle="dropdownHover" class="aegov-btn" type="button">
  Open dropdown
  <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
  </svg>
</button>
```

### Placement Variants

Use `data-dropdown-placement` attribute with values: `top`, `right`, `bottom`, `left`

```html
<button data-dropdown-placement="top" data-dropdown-toggle="dropdownPlacementTop" class="aegov-btn">Top</button>
<button data-dropdown-placement="right" data-dropdown-toggle="dropdownPlacementRight" class="aegov-btn">Right</button>
<button data-dropdown-placement="bottom" data-dropdown-toggle="dropdownPlacementBottom" class="aegov-btn">Bottom</button>
<button data-dropdown-placement="left" data-dropdown-toggle="dropdownPlacementLeft" class="aegov-btn">Left</button>
```

### Key Attributes

- **`data-dropdown-toggle`**: Links trigger to dropdown menu ID
- **`data-dropdown-trigger`**: Set to `hover` or `click` (default)
- **`data-dropdown-placement`**: Controls positioning (top/right/bottom/left)
- **`.aegov-dropdown`**: Main container class
- **`.dropdown-header`**: Optional header section
- **`.dropdown-body`**: Content wrapper
- **`.dropdown-item`**: Individual menu item styling
- **`.hidden`**: Default hidden state class

---

## 10. Breadcrumbs Component

### Basic Breadcrumbs with Separator

```html
<nav aria-label="Breadcrumb" class="aegov-breadcrumb with-seperator">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#" title="Media centre">Media centre</a></li>
    <li><a href="#" title="News">News</a></li>
    <li><a href="#" title="Special">Special articles</a></li>
    <li><a href="#" title="Press release and features">Press release and features</a></li>
    <li><span aria-current="page">A really long page name that must be affected.</span></li>
  </ol>
</nav>
```

### Breadcrumbs with Home Icon

```html
<nav aria-label="Breadcrumb" class="aegov-breadcrumb with-seperator">
  <ol>
    <li>
      <a href="#">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        Home
      </a>
    </li>
    <li><a href="#" title="Media centre">Media centre</a></li>
    <li><a href="#" title="News">News</a></li>
    <li><a href="#" title="Press release">Press release</a></li>
    <li><span aria-current="page">A really long page name that must be affected.</span></li>
  </ol>
</nav>
```

### Custom Separator (Caret Icon)

```html
<nav aria-label="Breadcrumb" class="aegov-breadcrumb">
  <ol>
    <li>
      <a href="#">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        Home
      </a>
      <svg aria-hidden="true" class="w-4 h-4 inline-block mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      </svg>
    </li>
    <li>
      <a href="#" title="Media centre">Media centre</a>
      <svg aria-hidden="true" class="w-4 h-4 inline-block mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      </svg>
    </li>
    <li>
      <a href="#" title="News">News</a>
      <svg aria-hidden="true" class="w-4 h-4 inline-block mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      </svg>
    </li>
    <li>
      <a href="#" title="Press release">Press release</a>
      <svg aria-hidden="true" class="w-4 h-4 inline-block mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      </svg>
    </li>
    <li>
      <span aria-current="page">A really long page name that must be affected.</span>
    </li>
  </ol>
</nav>
```

### Schema.org Microdata-Enabled Breadcrumbs

```html
<nav aria-label="Breadcrumb" class="aegov-breadcrumb with-seperator">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="#" itemprop="item"><span itemprop="name">Home</span></a>
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="#" itemprop="item" title="Media centre"><span itemprop="name">Media centre</span></a>
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="#" itemprop="item" title="News"><span itemprop="name">News</span></a>
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="#" itemprop="item" title="Press release and features"><span itemprop="name">Press release and features</span></a>
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span aria-current="page" itemprop="name">A really long page name that must be affected.</span>
    </li>
  </ol>
</nav>
```

### CMS-Generated Breadcrumbs (Span-Based)

```html
<nav aria-label="Breadcrumb" class="aegov-breadcrumb with-seperator">
  <span role="list">
    <span><a href="#">Home</a></span>
    <span><a href="#" title="About us">About us</a></span>
    <span><a href="#" title="The ministry">The ministry</a></span>
    <span><span aria-current="page">Our mission and vision</span></span>
  </span>
</nav>
```

### Key Classes and Attributes

- **Main container class**: `aegov-breadcrumb`
- **Separator class**: `with-seperator` (adds forward slash automatically)
- **ARIA label**: `aria-label="Breadcrumb"` on `<nav>`
- **Current page indicator**: `aria-current="page"` on final item
- **Icon hiding**: `aria-hidden="true"` on separator SVGs

---

## 11. Pagination Component

### Mobile Layout
```html
<nav aria-label="Pagination Navigation" class="aegov-pagination">
  <ul>
    <li>
      <a href="#" title="Previous page" class="page-link page-link-previous">
        <span class="sr-only">Previous</span>
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </a>
    </li>
    <li><span class="page-count">1 of 10</span></li>
    <li>
      <a href="#" title="Next page" class="page-link page-link-next">
        <span class="sr-only">Next</span>
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
```

### Desktop Layout with Page Numbers
```html
<nav aria-label="Pagination Navigation" class="aegov-pagination hidden md:flex">
  <ul>
    <li>
      <a href="#" title="Previous page" class="page-link page-link-previous">
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        <span>Previous</span>
      </a>
    </li>
    <li><a href="#" title="Go to page 1" class="page-link">1</a></li>
    <li><a href="#" title="Go to page 2" class="page-link page-link-active" aria-current="page">2</a></li>
    <li><a href="#" title="Go to page 3" class="page-link">3</a></li>
    <li><a href="#" title="Go to page 4" class="page-link">4</a></li>
    <li><a href="#" title="Go to page 5" class="page-link">5</a></li>
    <li><span class="page-ellipsis">...</span></li>
    <li><a href="#" title="Go to page 100" class="page-link">100</a></li>
    <li>
      <a href="#" title="Next page" class="page-link page-link-next">
        <span>Next</span>
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
```

### With First and Last Links
```html
<nav aria-label="Pagination Navigation" class="aegov-pagination hidden md:flex">
  <ul>
    <li>
      <a href="#" title="Go to first page" class="page-link page-link-first">
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="192 48 120 128 192 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          <line x1="64" y1="48" x2="64" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        <span>First</span>
      </a>
    </li>
    <li>
      <a href="#" title="Previous page" class="page-link page-link-previous">
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        <span>Previous</span>
      </a>
    </li>
    <!-- Page numbers here -->
    <li>
      <a href="#" title="Next page" class="page-link page-link-next">
        <span>Next</span>
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" title="Go to last page" class="page-link page-link-last">
        <span>Last</span>
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="64 48 136 128 64 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          <line x1="192" y1="48" x2="192" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
```

### Key Classes

- `.aegov-pagination` — Main container
- `.page-link` — Individual page link
- `.page-link-active` — Active/current page
- `.page-link-previous` / `.page-link-next` — Navigation links
- `.page-link-first` / `.page-link-last` — First/last links
- `.page-count` — Mobile page count text
- `.page-ellipsis` — Ellipsis for truncated pages
- `aria-current="page"` — Accessibility marker for current page

---

## 12. Tabs Component

### Basic Tabs Structure

```html
<div class="aegov-tab">
  <ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto"
      data-tabs-toggle="#SampleLayout-Tabs-01" role="tablist">
    <li role="presentation">
      <a href="#" onclick="return false;"
         data-tabs-target="#body-item1-sample-01"
         role="tab" id="tab-item1-sample-01"
         aria-controls="body-item1-sample-01"
         class="tab-link whitespace-nowrap">All services</a>
    </li>
    <li role="presentation">
      <a href="#" onclick="return false;"
         data-tabs-target="#body-item2-sample-01"
         role="tab" id="tab-item2-sample-01"
         aria-controls="body-item2-sample-01"
         class="tab-link whitespace-nowrap">Category 1</a>
    </li>
  </ul>
</div>
<div id="SampleLayout-Tabs-01" class="py-4">
  <div class="tab-content" role="tabpanel" id="body-item1-sample-01">
    <p>This is the content area for the tab "all services"</p>
  </div>
  <div class="tab-content" role="tabpanel" id="body-item2-sample-01">
    <p>This is the content area for the tab "category 1"</p>
  </div>
</div>
```

### Compact Tabs Variant

Add `tab-sm` class:
```html
<div class="aegov-tab tab-sm">
  <!-- Tab items -->
</div>
```

### Pills Tabs Variant

Add `tab-pills` class with sizing classes:
```html
<div class="aegov-tab tab-pills">
  <ul class="tab-items gap-4" data-tabs-toggle="#pills-tabs" role="tablist">
    <li role="presentation">
      <a href="#" onclick="return false;"
         data-tabs-target="#pills-tab-1"
         role="tab"
         aria-controls="pills-tab-1"
         class="tab-link whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6">Tab 1</a>
    </li>
  </ul>
</div>
```

### Tabs with Icons

Include SVG elements within tab links before label text:

```html
<li role="presentation">
  <a href="#" onclick="return false;"
     data-tabs-target="#tab-with-icon-1"
     role="tab"
     aria-controls="tab-with-icon-1"
     class="tab-link whitespace-nowrap">
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Icon SVG -->
    </svg>
    Profile
  </a>
</li>
```

### Key Attributes

- `data-tabs-toggle="{parentSelector}"` - Container reference
- `data-tabs-target="{contentSelector}"` - Links tab to content
- `role="tab"`, `role="tabpanel"` - Accessibility roles
- `aria-controls` - Connects tab to content
- `aria-selected="true"` - Marks active tab

---

## 13. Steps Component

### Horizontal Steps
```html
<ol class="aegov-steps">
  <li class="step-item step-completed">
    <span class="step-indicator">
      <svg class="step-icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
      </svg>
      <span class="step-number">1</span>
    </span>
    <div class="step-content">
      <h3 class="step-title">Step 1</h3>
      <p class="step-description">Description for step 1</p>
    </div>
  </li>
  <li class="step-item step-active">
    <span class="step-indicator">
      <span class="step-number">2</span>
    </span>
    <div class="step-content">
      <h3 class="step-title">Step 2</h3>
      <p class="step-description">Description for step 2</p>
    </div>
  </li>
  <li class="step-item">
    <span class="step-indicator">
      <span class="step-number">3</span>
    </span>
    <div class="step-content">
      <h3 class="step-title">Step 3</h3>
      <p class="step-description">Description for step 3</p>
    </div>
  </li>
</ol>
```

### Vertical Steps
```html
<ol class="aegov-steps steps-vertical">
  <!-- Same structure as horizontal -->
</ol>
```

### Size Variations

**Small:**
```html
<ol class="aegov-steps steps-sm">
  <!-- Steps -->
</ol>
```

**Large:**
```html
<ol class="aegov-steps steps-lg">
  <!-- Steps -->
</ol>
```

### State Classes

- `.step-completed` — Completed step (shows check icon)
- `.step-active` — Current active step
- No class — Future/inactive step

---

## 14. Alert Component

### Basic Alert Variants

```html
<!-- Info Alert (Soft) -->
<div role="alert" class="aegov-alert alert-info">
  <div class="alert-content">
    <p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
  </div>
</div>

<!-- Error Alert (Soft) -->
<div role="alert" class="aegov-alert alert-error">
  <div class="alert-content">
    <p>Unable to connect to the server. Please try again later or contact support.</p>
  </div>
</div>

<!-- Success Alert (Soft) -->
<div role="alert" class="aegov-alert alert-success">
  <div class="alert-content">
    <p>Your payment was processed successfully. Thank you!</p>
  </div>
</div>

<!-- Warning Alert (Soft) -->
<div role="alert" class="aegov-alert alert-warning">
  <div class="alert-content">
    <p>Your password will expire in 3 days. Consider updating it now.</p>
  </div>
</div>
```

### Solid Variants

```html
<!-- Solid Info Alert -->
<div role="alert" class="aegov-alert alert-solid alert-info">
  <div class="alert-content">
    <p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
  </div>
</div>

<!-- Solid Error Alert -->
<div role="alert" class="aegov-alert alert-solid alert-error">
  <div class="alert-content">
    <p>Unable to connect to the server. Please try again later or contact support.</p>
  </div>
</div>

<!-- Solid Success Alert -->
<div role="alert" class="aegov-alert alert-solid alert-success">
  <div class="alert-content">
    <p>Your payment was processed successfully. Thank you!</p>
  </div>
</div>

<!-- Solid Warning Alert -->
<div role="alert" class="aegov-alert alert-solid alert-warning">
  <div class="alert-content">
    <p>Your password will expire in 3 days. Consider updating it now.</p>
  </div>
</div>
```

### Alert with Icon

```html
<div role="alert" class="aegov-alert alert-info">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" aria-hidden="true"/>
      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      <path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
      <circle cx="124" cy="84" r="12"/>
    </svg>
  </div>
  <div class="alert-content">
    <p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
  </div>
</div>
```

### Alert with Icon and Link

```html
<div role="alert" class="aegov-alert alert-info">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <!-- SVG content -->
    </svg>
  </div>
  <div class="alert-content alert-with-link">
    <div>
      <p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
    </div>
    <p class="alert-link">
      <a href="#">
        Remind me
        <svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 256 256">
          <!-- Arrow SVG -->
        </svg>
      </a>
    </p>
  </div>
</div>
```

### Alert with List

```html
<div role="alert" class="aegov-alert alert-error">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <!-- Error icon SVG -->
    </svg>
  </div>
  <div class="alert-content">
    <div class="alert-title">There were 3 errors encountered</div>
    <ul class="list-disc mt-3 space-y-2 ps-4">
      <li>Your password must be at least 8 characters</li>
      <li>Your password must include at least 1 numeric value</li>
      <li>Your last name is blank</li>
    </ul>
  </div>
</div>
```

### Dismissible Alert

```html
<div role="alert" id="alert-1" class="aegov-alert alert-info">
  <div class="alert-content">
    <p>This alert can be closed. Please take necessary action.</p>
  </div>
  <div class="alert-dismiss">
    <button data-dismiss-target="#alert-1" aria-label="Close">
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
      </svg>
    </button>
  </div>
</div>
```

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.aegov-alert` | Main alert container |
| `.alert-info` | Blue color scheme |
| `.alert-error` | Red color scheme |
| `.alert-success` | Green color scheme |
| `.alert-warning` | Orange/camel color scheme |
| `.alert-solid` | Strong/solid variant |
| `.alert-content` | Content wrapper |
| `.alert-icon` | Icon container |
| `.alert-with-link` | Layout for linked alerts |
| `.alert-dismiss` | Dismissal button container |
| `.alert-title` | Title section |
| `.alert-link` | Link styling |

---

## 15. Toast Component

### Basic Toast (Similar to Alert)

Toasts use similar structure to alerts but typically positioned fixed on screen:

```html
<div role="alert" class="aegov-toast toast-success">
  <div class="toast-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Check icon -->
    </svg>
  </div>
  <div class="toast-content">
    <p>Operation completed successfully!</p>
  </div>
  <div class="toast-dismiss">
    <button data-dismiss-target="#toast-1" aria-label="Close">
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <!-- X icon -->
      </svg>
    </button>
  </div>
</div>
```

### Toast Variants

- `.toast-success` — Success toast
- `.toast-error` — Error toast
- `.toast-info` — Info toast
- `.toast-warning` — Warning toast

Note: Full toast documentation may vary from alerts; check official docs for specific positioning and animation classes.

---

## 16. Modal Component

### Basic Modal Structure

```html
<button data-modal-target="modal-simple" data-modal-toggle="modal-simple" class="aegov-btn" type="button">
    Open Modal
</button>

<div id="modal-simple" tabindex="-1" aria-hidden="true" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="modal-simple-title">
    <div class="relative sm:w-full lg:max-w-xl max-h-full">
        <div class="aegov-modal-wrapper bg-whitely-100 p-4 md:p-5 xl:p-6">
            <div>
                <h2 class="text-2xl font-semibold mb-4 sm:mb-6" id="modal-simple-title">Hello</h2>
                <p>Modal content here</p>
                <div class="mt-6 sm:mt-8 sm:flex sm:flex-row-reverse sm:gap-3">
                    <button data-modal-hide="modal-simple" type="button" class="aegov-btn">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Key Data Attributes

- `data-modal-target="ID"` — targets modal by ID
- `data-modal-toggle="ID"` — toggles visibility
- `data-modal-show="ID"` — explicitly shows modal
- `data-modal-hide="ID"` — closes modal
- `data-modal-backdrop="static"` — prevents backdrop click closure
- `data-modal-placement="position"` — positions modal (e.g., "bottom-right")

### Placement Variant (Bottom-Right)

```html
<div data-modal-backdrop="static" data-modal-placement="bottom-right"
     id="modal-placement" tabindex="-1" aria-hidden="true"
     class="aegov-modal hidden z-50" role="dialog">
    <div class="relative sm:w-full lg:max-w-xl max-h-full">
        <!-- modal content -->
    </div>
</div>
```

### Serious Modal Type

Add `.modal-serious` class to `.aegov-modal` for serious confirmation dialogs with distinct styling.

---

## 17. Popover Component

### Basic Popover Structure

```html
<!-- Trigger -->
<button data-popover-target="popover-default" type="button" class="aegov-btn">
  Show popover
</button>

<!-- Popover Content -->
<div data-popover id="popover-default" role="tooltip"
     class="aegov-popover invisible absolute z-10 inline-block w-64 text-sm transition-opacity duration-300 opacity-0">
  <div class="popover-header">
    <h3>Popover title</h3>
  </div>
  <div class="popover-body">
    <p>And here's some amazing content. It's very engaging. Right?</p>
  </div>
</div>
```

### Popover with Only Body (No Header)

```html
<div data-popover id="popover-body" role="tooltip" class="aegov-popover invisible absolute z-10">
  <div class="popover-body">
    <p>This is just body content without a header.</p>
  </div>
</div>
```

### Key Attributes

- `data-popover-target="ID"` — Links trigger to popover
- `data-popover-trigger="hover"` or `"click"` — Trigger type
- `data-popover-placement="top"` / `"right"` / `"bottom"` / `"left"` — Position
- `data-popover-offset="10"` — Distance from trigger

---

## 18. Tooltip Component

### Basic Tooltip Structure

```html
<!-- Trigger -->
<button data-tooltip-target="tooltip-default" type="button" class="aegov-btn">
  Hover me
</button>

<!-- Tooltip -->
<div id="tooltip-default" role="tooltip"
     class="aegov-tooltip invisible absolute z-10 inline-block px-3 py-2 text-sm font-medium transition-opacity duration-300 opacity-0">
  Tooltip text
  <div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Placement Variants

```html
<!-- Top (default) -->
<button data-tooltip-target="tooltip-top" data-tooltip-placement="top">Top</button>
<div id="tooltip-top" role="tooltip" class="aegov-tooltip">Tooltip on top</div>

<!-- Right -->
<button data-tooltip-target="tooltip-right" data-tooltip-placement="right">Right</button>
<div id="tooltip-right" role="tooltip" class="aegov-tooltip">Tooltip on right</div>

<!-- Bottom -->
<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom">Bottom</button>
<div id="tooltip-bottom" role="tooltip" class="aegov-tooltip">Tooltip on bottom</div>

<!-- Left -->
<button data-tooltip-target="tooltip-left" data-tooltip-placement="left">Left</button>
<div id="tooltip-left" role="tooltip" class="aegov-tooltip">Tooltip on left</div>
```

### Tooltip Trigger Types

```html
<!-- Hover (default) -->
<button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover">Hover</button>

<!-- Click -->
<button data-tooltip-target="tooltip-click" data-tooltip-trigger="click">Click</button>
```

### Key Attributes

- `data-tooltip-target="ID"` — Links trigger to tooltip
- `data-tooltip-placement="position"` — top/right/bottom/left
- `data-tooltip-trigger="hover"` or `"click"` — Trigger method

---

## 19. Button Component

### Button Variants

**Solid Button (Default)**
```html
<button class="aegov-btn" type="button">Solid button</button>
```

**Outline Button**
```html
<button class="aegov-btn btn-outline" type="button">Outline button</button>
```

**Soft Button**
```html
<button class="aegov-btn btn-soft" type="button">Soft button</button>
```

**Link Button**
```html
<button class="aegov-btn btn-link" type="button">Link button</button>
```

### Size Variations

**Large Button**
```html
<button class="aegov-btn btn-lg" type="button">Large button</button>
```

**Base Button (Default - 48px height)**
```html
<button class="aegov-btn" type="button">Base button</button>
```

**Small Button**
```html
<button class="aegov-btn btn-sm" type="button">Small button</button>
```

**Extra Small Button**
```html
<button class="aegov-btn btn-xs" type="button">Extra small button</button>
```

### Buttons with Icons

**Left Icon Example**
```html
<button class="aegov-btn btn-lg" type="button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- SVG content -->
  </svg>
  My account
</button>
```

**Right Icon Example**
```html
<button class="aegov-btn" type="button">
  Register
  <svg class="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- SVG content -->
  </svg>
</button>
```

**Icon-Only Button**
```html
<button class="aegov-btn btn-icon btn-lg" type="button">
  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- SVG content -->
  </svg>
  <span class="sr-only">Search</span>
</button>
```

### Secondary Color Variant

```html
<button class="aegov-btn btn-secondary" type="button">Solid button</button>
<button class="aegov-btn btn-outline btn-secondary" type="button">Outline button</button>
```

### Disabled State

```html
<button class="aegov-btn" type="button" disabled aria-disabled="true">
  Disabled button
</button>
```

### Responsive Sizing

```html
<button class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg" type="button">
  Responsive button
</button>
```

### RTL Support Example (Arabic)

```html
<button class="aegov-btn" type="button">تسجيل الدخول</button>
```

### Key Class Names Summary

- **Base**: `aegov-btn`
- **Variants**: `btn-outline`, `btn-soft`, `btn-link`
- **Sizes**: `btn-xs`, `btn-sm`, `btn-base` (default), `btn-lg`
- **Special**: `btn-icon`, `btn-secondary`, `btn-style`, `btn-colour`
- **States**: `disabled` attribute + `aria-disabled="true"`

---

## 20. Card Component

### Basic Card with Border
```html
<div class="aegov-card card-bordered">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-8 h-8" aria-hidden="true">
    <!-- SVG content -->
  </svg>
  <h5>The title of the card</h5>
  <p>The description of a card, and this may be variable based on the device or width of the viewport.</p>
  <div class="block">
    <a href="#" class="aegov-link" title="Some link text related description">
      View details
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
  </div>
</div>
```

### Card with Glow Effect
```html
<div class="aegov-card card-bordered card-glow"></div>
```

### Custom Glow Color
```html
<div class="aegov-card card-bordered card-glow !border-aeblack-100 !shadow-aeblack-200/20"></div>
```

### Media Card
```html
<div class="aegov-card card-bordered card-glow !shadow-primary-500/30">
  <img src="/img/component_assets/card-Hackathon_logo.svg" class="w-full h-auto rounded-xl">
  <h5>The UAE Hackathon</h5>
  <p class="line-clamp-4">This initiative will create an opportunity for hundreds of young people to use open data...</p>
  <div class="block">
    <a href="#" class="aegov-link" title="Some link text related description">
      View details
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
  </div>
</div>
```

### News Card Without Border
```html
<div class="aegov-card card-news">
  <a href="#">
    <img src="/img/block_assets/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future">
  </a>
  <div class="card-content">
    <div class="custom-divide custom-divide-sm flex flex-wrap">
      <div class="text-aeblack-600 text-sm font-normal">11th Jun 2023</div>
      <a href="#" class="text-sm font-normal">Press release</a>
    </div>
    <h5 class="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future through "Digital Skills Forum" on International Youth Day</h5>
    <p class="line-clamp-3">In alignment with the UAE government's visionary theme for 2023...</p>
    <a href="#" class="aegov-link">
      View details
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
  </div>
</div>
```

### News Card With Border
```html
<div class="aegov-card card-news card-bordered card-glow !border-aeblack-100 !shadow-aeblack-500/30">
  <a href="#">
    <img src="/img/block_assets/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future">
  </a>
  <div class="card-content">
    <div class="custom-divide custom-divide-sm flex flex-wrap">
      <div class="text-aeblack-600 text-sm font-normal">11th Jun 2023</div>
      <a href="#" class="text-sm font-normal">Press release</a>
    </div>
    <h5 class="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future through "Digital Skills Forum" on International Youth Day</h5>
    <p class="line-clamp-3">In alignment with the UAE government's visionary theme for 2023...</p>
    <a href="#" class="aegov-link">
      View details
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
  </div>
</div>
```

### Service Card
```html
<div class="aegov-card card-bordered card-glow card-service">
  <h5 class="card-service-title line-clamp-2">
    <a href="#">Issuance of a vehicle registration</a>
  </h5>
  <p>Through this service, you may register a vehicle, the license for the vehicle and the number plate issued to the driver.</p>
  <div class="flex items-center justify-between gap-4">
    <a href="#" onclick="return false;" class="aegov-link">
      Start service
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
    <a href="" class="text-primary-600 hover:text-primary-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
        <!-- Bookmark SVG -->
      </svg>
    </a>
  </div>
</div>
```

### Creative Card
```html
<div class="aegov-card card-creative">
  <img src="http://designsystem.gov.ae/assets/documentation/components/card-cultural-representation--01.jpg" class="min-h-[33.5rem]">
  <div class="card-content">
    Empowering women in tech and science
  </div>
</div>
```

### Image on Left Card
```html
<div class="aegov-card card-news card-bordered card-glow bg-whitely-50 !border-aeblack-100 !shadow-aeblack-500/30 sm:flex">
  <a href="#" class="sm:w-48 flex-shrink-0 relative">
    <img class="sm:absolute sm:inset-0 sm:h-full object-cover" src="https://designsystem.gov.ae/assets/series/sustainable-by-design/sbd-design-001.jpg" alt="TDRA empowers youth for a sustainable future">
  </a>
  <div class="card-content">
    <div class="custom-divide custom-divide-sm flex flex-wrap">
      <div class="text-aeblack-600 text-sm font-medium">What's new</div>
    </div>
    <h5 class="max-md:text-lg line-clamp-3">Sustainable by design</h5>
    <p class="line-clamp-2">Sustainable web design is the practice of designing and developing websites that have a low environmental impact.</p>
    <a href="#" class="aegov-link" aria-label="Read more about sustainable by design">
      Read More
      <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- Arrow SVG -->
      </svg>
    </a>
  </div>
</div>
```

### Size Variations

Cards support responsive sizing with classes:
- `card-lg` (for 2xl containers)
- `card-base` (default, for md/lg/xl containers)
- `card-sm` (for smaller containers)

Responsive example:
```html
<div class="aegov-card card-sm md:card-base 2xl:card-lg">
  <!-- Content -->
</div>
```

### Key Classes Reference
- `.aegov-card` - Base card class
- `.card-bordered` - Adds border
- `.card-glow` - Adds shadow/glow effect
- `.card-news` - News card variant
- `.card-service` - Service card variant
- `.card-creative` - Creative card variant
- `.card-content` - Content wrapper
- `.card-service-title` - Service card title styling

---

## 21. Badge Component

### Soft Style Badges

**Info Badge (Default)**
```html
<span class="aegov-badge badge-info">Badge</span>
```

**Error Badge**
```html
<span class="aegov-badge badge-error">Badge</span>
```

**Success Badge**
```html
<span class="aegov-badge badge-success">Badge</span>
```

**Warning Badge**
```html
<span class="aegov-badge badge-warning">Badge</span>
```

### Solid Style Badges

**Solid Info**
```html
<span class="aegov-badge badge-solid badge-info">Badge</span>
```

**Solid Error**
```html
<span class="aegov-badge badge-solid badge-error">Badge</span>
```

**Solid Success**
```html
<span class="aegov-badge badge-solid badge-success">Badge</span>
```

**Solid Warning**
```html
<span class="aegov-badge badge-solid badge-warning">Badge</span>
```

### Size Variations

**Large Badge**
```html
<span class="aegov-badge badge-lg badge-info">Large badge</span>
```

**Default Size**
```html
<span class="aegov-badge badge-info">Default badge</span>
```

### Badges with Icons

**Left Icon**
```html
<span class="aegov-badge badge-info">
  <svg class="w-3 h-3 me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Icon SVG -->
  </svg>
  Badge with icon
</span>
```

**Right Icon**
```html
<span class="aegov-badge badge-info">
  Badge with icon
  <svg class="w-3 h-3 ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Icon SVG -->
  </svg>
</span>
```

### Key Classes

- `.aegov-badge` — Base badge class
- `.badge-info` / `.badge-error` / `.badge-success` / `.badge-warning` — Color variants
- `.badge-solid` — Solid background style
- `.badge-lg` — Large size

---

## 22. Banner Component

### Top Banner (Default)
```html
<div class="aegov-banner" role="banner">
  <div class="banner-content">
    <p>This is an important announcement that will be displayed at the top of the page.</p>
    <a href="#" class="banner-link">Learn more</a>
  </div>
  <button class="banner-dismiss" data-dismiss-target="#banner-top" aria-label="Close banner">
    <svg viewBox="0 0 20 20" fill="currentColor">
      <!-- X icon -->
    </svg>
  </button>
</div>
```

### Bottom Banner
```html
<div class="aegov-banner banner-bottom" role="banner">
  <div class="banner-content">
    <p>We use cookies to improve your experience.</p>
    <a href="#" class="banner-link">Privacy policy</a>
  </div>
  <button class="banner-dismiss" data-dismiss-target="#banner-bottom" aria-label="Close banner">
    <svg viewBox="0 0 20 20" fill="currentColor">
      <!-- X icon -->
    </svg>
  </button>
</div>
```

### Colored Banner Variants

**Info Banner**
```html
<div class="aegov-banner banner-info">
  <!-- Content -->
</div>
```

**Success Banner**
```html
<div class="aegov-banner banner-success">
  <!-- Content -->
</div>
```

**Warning Banner**
```html
<div class="aegov-banner banner-warning">
  <!-- Content -->
</div>
```

**Error Banner**
```html
<div class="aegov-banner banner-error">
  <!-- Content -->
</div>
```

### Notice Banner (Persistent)
```html
<div class="aegov-banner banner-notice" role="banner">
  <div class="banner-content">
    <svg class="banner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <!-- Info icon -->
    </svg>
    <p>System maintenance scheduled for tonight at 10 PM UAE time.</p>
  </div>
</div>
```

### Dismissible Banner
```html
<div id="dismissible-banner" class="aegov-banner banner-info">
  <div class="banner-content">
    <p>This banner can be closed.</p>
  </div>
  <button class="banner-dismiss" data-dismiss-target="#dismissible-banner" aria-label="Close">
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
    </svg>
  </button>
</div>
```

### Key Classes

- `.aegov-banner` — Base banner class
- `.banner-bottom` — Position at bottom
- `.banner-info` / `.banner-success` / `.banner-warning` / `.banner-error` — Color variants
- `.banner-notice` — Notice/persistent banner style
- `.banner-content` — Content wrapper
- `.banner-link` — Link styling
- `.banner-dismiss` — Dismiss button
- `.banner-icon` — Icon element

---

## 23. Blockquote Component

### Default Blockquote with Icon
```html
<blockquote class="aegov-blockquote">
  <svg class="blockquote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Quote icon SVG -->
  </svg>
  <p class="blockquote-text">
    "The future belongs to those who believe in the beauty of their dreams."
  </p>
</blockquote>
```

### Colored Variant (Primary)
```html
<blockquote class="aegov-blockquote blockquote-primary">
  <svg class="blockquote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Quote icon SVG -->
  </svg>
  <p class="blockquote-text">
    "Innovation distinguishes between a leader and a follower."
  </p>
</blockquote>
```

### With Author Attribution
```html
<blockquote class="aegov-blockquote">
  <svg class="blockquote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Quote icon SVG -->
  </svg>
  <p class="blockquote-text">
    "The only way to do great work is to love what you do."
  </p>
  <cite class="blockquote-author">— Steve Jobs</cite>
</blockquote>
```

### Key Classes

- `.aegov-blockquote` — Base blockquote class
- `.blockquote-primary` — Primary colored variant
- `.blockquote-icon` — Quote icon styling
- `.blockquote-text` — Quote text
- `.blockquote-author` — Author attribution

---

## 24. Hyperlink Component

### Standard Link
```html
<a href="#" class="aegov-link">Standard link</a>
```

### Link with Icon (CTA Style)
```html
<a href="#" class="aegov-link">
  Learn more
  <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </svg>
</a>
```

### Soft Link Style
```html
<a href="#" class="aegov-link link-soft">Soft link</a>
```

### Button-Styled Link
```html
<a href="#" class="aegov-btn">Link as button</a>
```

### External Link (with icon)
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="aegov-link">
  External link
  <svg class="link-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- External link icon -->
  </svg>
  <span class="sr-only">(opens in new window)</span>
</a>
```

### Key Classes

- `.aegov-link` — Base link class
- `.link-soft` — Soft link style
- `.link-icon` — Icon within link
- `rtl:-scale-x-100` — RTL support for directional icons

---

## 25. Avatar Component

### Square Avatars

**Large**
```html
<img class="aegov-avatar avatar-square avatar-xl" src="/path/to/image.jpg" alt="User name">
```

**Medium**
```html
<img class="aegov-avatar avatar-square avatar-lg" src="/path/to/image.jpg" alt="User name">
```

**Small**
```html
<img class="aegov-avatar avatar-square avatar-md" src="/path/to/image.jpg" alt="User name">
```

### Rounded Avatars

**Extra Large**
```html
<img class="aegov-avatar avatar-rounded avatar-2xl" src="/path/to/image.jpg" alt="User name">
```

**Large**
```html
<img class="aegov-avatar avatar-rounded avatar-xl" src="/path/to/image.jpg" alt="User name">
```

**Base**
```html
<img class="aegov-avatar avatar-rounded" src="/path/to/image.jpg" alt="User name">
```

**Small**
```html
<img class="aegov-avatar avatar-rounded avatar-sm" src="/path/to/image.jpg" alt="User name">
```

**Extra Small**
```html
<img class="aegov-avatar avatar-rounded avatar-xs" src="/path/to/image.jpg" alt="User name">
```

### Avatar with Status Indicator

```html
<div class="avatar-wrapper">
  <img class="aegov-avatar avatar-rounded avatar-lg" src="/path/to/image.jpg" alt="User name">
  <span class="avatar-status status-online"></span>
</div>
```

**Status Variants:**
- `.status-online` — Green indicator
- `.status-offline` — Gray indicator
- `.status-busy` — Red indicator

### Placeholder Avatar (No Image)

```html
<div class="aegov-avatar avatar-rounded avatar-placeholder avatar-lg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- User icon SVG -->
  </svg>
</div>
```

### Size Classes

- `.avatar-2xl` — 96px
- `.avatar-xl` — 80px
- `.avatar-lg` — 64px
- `.avatar-base` (default) — 48px
- `.avatar-md` — 40px
- `.avatar-sm` — 32px
- `.avatar-xs` — 24px

---

## 26. Accordion Component

### Basic Accordion Structure

```html
<div class="aegov-accordion [&_.accordion-active_svg]:rotate-180" id="accordion-collapse" data-accordion="collapse">
	<div class="accordion-item">
		<div class="accordion-title" id="aegov-accordion-head-1">
			<button type="button" data-accordion-target="#aegov-accordion-body-1" aria-expanded="true" aria-controls="aegov-accordion-body-1">
				<span>Accordion Title</span>
				<svg data-accordion-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</button>
		</div>
		<div class="accordion-content hidden" id="aegov-accordion-body-1" aria-labelledby="aegov-accordion-head-1">
			<div class="accordion-content-body">
				<p>Content goes here</p>
			</div>
		</div>
	</div>
</div>
```

### Variant: Different Icon (Plus Icon with 45° Rotation)

```html
<div class="aegov-accordion [&_.accordion-active_svg]:rotate-45" id="accordion-collapse-1" data-accordion="collapse">
	<div class="accordion-item">
		<div class="accordion-title" id="acc-v2-head-1">
			<button type="button" data-accordion-target="#acc-v2-body-1" aria-expanded="true" aria-controls="acc-v2-body-1">
				<span>Title</span>
				<svg data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="currentColor"/></svg>
			</button>
		</div>
		<div class="accordion-content" id="acc-v2-body-1" aria-labelledby="acc-v2-head-1">
			<div class="accordion-content-body">
				<p>Content</p>
			</div>
		</div>
	</div>
</div>
```

### Key Attributes & Classes

| Element | Attribute | Purpose |
|---------|-----------|---------|
| Container | `data-accordion="collapse"` | Enables collapse behavior |
| Button | `aria-expanded` | Indicates open/closed state |
| Button | `data-accordion-target` | Links to content ID |
| Content | `hidden` | Initial closed state |
| SVG | `data-accordion-icon` | Rotates on state change |

### Important Classes

- `.aegov-accordion` - Container wrapper
- `.accordion-item` - Individual item wrapper
- `.accordion-title` - Header section
- `.accordion-content` - Collapsible content area
- `.accordion-content-body` - Inner content wrapper
- `[&_.accordion-active_svg]:rotate-180` - Icon rotation utility

---

## 28. Slider Component

The Slider component creates horizontal carousels using the Slick Slider library. It's device-responsive and supports various content types.

### Logo Slider

```html
<div class="logos-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
  <div>
    <a href="#" class="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
      <img src="images/logo1.png" alt="Partner logo">
    </a>
  </div>
  <div>
    <a href="#" class="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
      <img src="images/logo2.png" alt="Partner logo">
    </a>
  </div>
  <!-- More logo items -->
</div>
```

**JavaScript Configuration:**
```javascript
$(".logos-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } }
  ]
});
```

### Initiatives Slider (Card-Based)

```html
<div class="initiative-slider [&_.slick-list]:pb-8 aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
  <div>
    <div class="aegov-card card-bordered card-glow !shadow-primary-500/30">
      <img src="images/card-Hackathon_2.jpg" class="w-full h-auto rounded-xl">
      <h5>The UAE Hackathon</h5>
      <p class="line-clamp-4">This initiative will create an opportunity for hundreds of young people to use open data...</p>
      <div class="block">
        <a href="#" class="aegov-link" title="View initiative details">
          View details
          <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- More initiative cards -->
</div>
```

**JavaScript Configuration:**
```javascript
$(".initiative-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
});
```

### News Slider

```html
<div class="news-card-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
  <div>
    <div class="aegov-card card-news">
      <a href="#">
        <img src="images/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future">
      </a>
      <div class="card-content">
        <div class="custom-divide custom-divide-sm flex flex-wrap">
          <div class="text-aeblack-600 text-sm font-normal">11th Jun 2023</div>
          <a href="#" class="text-sm font-normal">Press release</a>
        </div>
        <h5 class="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future through "Digital Skills Forum" on International Youth Day</h5>
        <p class="line-clamp-3">In alignment with the UAE government's visionary theme for 2023...</p>
        <a href="#" class="aegov-link">
          View details
          <svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- More news cards -->
</div>
```

**JavaScript Configuration:**
```javascript
$(".news-card-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
});
```

### Key Classes

- `.aegovs-slider-style` — Base slider styling
- `.logos-slider` — Logo carousel variant
- `.initiative-slider` — Initiative card carousel
- `.news-card-slider` — News card carousel
- `[&_.slick-slide]:mx-*` — Slide horizontal margins
- `[&_.slick-list]:-mx-*` — Negative margins for list container
- `[&_.slick-list]:pb-8` — Bottom padding for dots

### JavaScript Dependencies

**Required Libraries:**
- jQuery
- Slick Slider library

**Common Configuration Options:**
- `slidesToShow` — Number of slides visible
- `slidesToScroll` — Number of slides to scroll
- `autoplay` — Auto-advance slides
- `dots` — Show navigation dots
- `arrows` — Show prev/next arrows
- `responsive` — Breakpoint-specific settings

### Responsive Breakpoints

Standard breakpoints used across all sliders:
- **1024px** — Large tablets and smaller desktops
- **768px** — Tablets
- **480px** — Mobile devices

### Implementation Notes

- Uses Slick Slider (external jQuery plugin)
- Supports touch/swipe gestures by default
- RTL support with `rtl:-scale-x-100` for directional icons
- Autoplay enabled by default
- Navigation dots included, arrows hidden by default

---

## Common Patterns Summary

### Data Attributes for JavaScript

- **Accordion**: `data-accordion`, `data-accordion-target`
- **Dropdown**: `data-dropdown-toggle`, `data-dropdown-trigger`, `data-dropdown-placement`
- **Modal**: `data-modal-target`, `data-modal-toggle`, `data-modal-hide`, `data-modal-show`
- **Tabs**: `data-tabs-toggle`, `data-tabs-target`
- **Tooltip**: `data-tooltip-target`, `data-tooltip-placement`
- **Popover**: `data-popover-target`, `data-popover-trigger`
- **Dismiss**: `data-dismiss-target`

### Common Size Classes

- **Extra Small**: `.control-xs`, `.btn-xs`, `.avatar-xs`, `.check-xs`, `.badge-xs`
- **Small**: `.control-sm`, `.btn-sm`, `.avatar-sm`, `.check-sm`, `.tab-sm`, `.steps-sm`
- **Base**: Default (no modifier) or `.control-base`, `.btn-base`
- **Large**: `.control-lg`, `.btn-lg`, `.avatar-lg`, `.check-lg`, `.badge-lg`, `.steps-lg`
- **Extra Large**: `.btn-xl`, `.avatar-xl`, `.avatar-2xl`

### Color Variant Classes

- **Primary**: `.btn-primary`, `.badge-primary`, `.blockquote-primary`
- **Secondary**: `.btn-secondary`, `.control-secondary`, `.check-secondary`, `.radio-secondary`
- **Info**: `.alert-info`, `.badge-info`, `.banner-info`
- **Success**: `.alert-success`, `.badge-success`, `.banner-success`
- **Warning**: `.alert-warning`, `.badge-warning`, `.banner-warning`
- **Error**: `.alert-error`, `.badge-error`, `.banner-error`

### State Classes

- **Active**: `.page-link-active`, `.step-active`, `.accordion-active`
- **Completed**: `.step-completed`
- **Disabled**: `disabled` attribute + `aria-disabled="true"`
- **Hidden**: `.hidden` (used for initial states)

### RTL Support

- **Icon Flip**: `.rtl:-scale-x-100` (for directional icons like arrows)
- **Rotation**: `.rtl:rotate-180`
- All components support RTL layout automatically

### Accessibility Attributes

- **ARIA Labels**: `aria-label`, `aria-labelledby`
- **ARIA Described By**: `aria-describedby`
- **ARIA Expanded**: `aria-expanded` (for collapsible elements)
- **ARIA Current**: `aria-current="page"` (for current page/tab)
- **ARIA Hidden**: `aria-hidden="true"` (for decorative icons)
- **Role**: `role="alert"`, `role="dialog"`, `role="tab"`, `role="tabpanel"`, etc.
- **Screen Reader Only**: `.sr-only`

---

## Next Steps

This reference provides complete HTML structure for all 28 AEGOV components. Use these examples to:

1. **Create React Components** - Convert each HTML structure to React components
2. **Understand Patterns** - Identify common patterns for data attributes and class naming
3. **Maintain Consistency** - Ensure React versions maintain the same class names and structure
4. **Test Accessibility** - Verify all ARIA attributes are properly implemented
5. **Support RTL** - Ensure RTL support is maintained in React components

Refer to **[step-03-blocks-reference.md](./step-03-blocks-reference.md)** for complete Block examples (Header, Footer, Hero, etc.).

---

**Documentation completed:** 2025-11-17
**Source:** https://designsystem.gov.ae/docs/components/
**Next:** Create React component wrappers and conversion guide
