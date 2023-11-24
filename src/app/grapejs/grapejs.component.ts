import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import grapesjs from 'grapesjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-grapejs',
  templateUrl: './grapejs.component.html',
  styleUrls: [
    './grapejs.component.css'
    // '../../../node_modules/grapesjs/dist/css/grapes.min.css'
  ]
})
export class GrapejsComponent implements OnInit {
  @ViewChild('gjs', { static: true }) gjs!: ElementRef;
  @ViewChild('downloadContainer', { static: false }) downloadContainer!: ElementRef;
  editor: any;

  constructor() { }

  ngOnInit() {
    this.editor = grapesjs.init({
      container: this.gjs.nativeElement,
      // Add your GrapeJS configuration options here
      components: '<div class="my-component">Hello World!</div>',
      style: '.my-component{color: red;}',
    });
  }

  downloadPage() {
    const htmlContent = this.editor.getHtml();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    saveAs(blob, 'downloaded-page.html');
  }

}
