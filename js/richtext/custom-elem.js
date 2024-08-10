/**
 * @description �Զ��� elem
 * @author wangfupeng
 */

// ------------------------------------------ native-shim start ------------------------------------------

// �ο� https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 */
;(function () {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined ||
    // The webcomponentsjs custom elements polyfill doesn't require
    // ES2015-compatible construction (`super()` or `Reflect.construct`).
    window.customElements.polyfillWrapFlushCallback
  ) {
    return
  }
  const BuiltInHTMLElement = HTMLElement
  /**
   * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
   * However, if we declare the function as a property on an object literal, and
   * use quotes for the property name, then closure will leave that much intact,
   * which is enough for the JS VM to correctly set Function.prototype.name.
   */
  const wrapperForTheName = {
    HTMLElement: /** @this {!Object} */ function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ this.constructor)
    },
  }
  window.HTMLElement = wrapperForTheName['HTMLElement']
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()
// ------------------------------------------ native-shim end ------------------------------------------

// ------------------------------------------ �������� start ------------------------------------------
!(function () {
  // ��ǰ����
  const LANG = location.href.indexOf('lang=en') > 0 ? 'en' : 'zh-CN'

  // �Զ������
  class MyNav extends HTMLElement {
    constructor() {
      super()

      const shadow = this.attachShadow({ mode: 'open' })
      const document = shadow.ownerDocument

      const style = document.createElement('style')
      style.innerHTML = `
      .container {
        display: flex;
        padding: 10px;
        background-color: #4474c8;
        color: #fff;
      }
      .container a {
        color: #fff;
        text-decoration: none;
      }
      .container h1 {
        flex: 1;
        margin: 0;
        font-size: 26px;
      }
      .container .right-container {
        width: 200px;
        text-align: right;
        line-height: 26px;
      }
    `
      shadow.appendChild(style)

      // ����
      const container = document.createElement('div')
      container.className = 'container'

      // ����
      const header = document.createElement('h1')
      header.textContent = ''
      this.header = header

      container.appendChild(header)
      container.appendChild(rightContainer)

      shadow.appendChild(container)
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'title') {
        if (oldValue == newValue) return
        this.header.textContent = newValue
      }
    }
  }
  MyNav.observedAttributes = ['title']
  window.customElements.define('demo-nav', MyNav)
})()
// ------------------------------------------ �������� end ------------------------------------------