import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TemplateDisplayComponent } from '../template-display/template-display.component';

@Component({
  selector: 'app-template-placeholders',
  templateUrl: './template-placeholders.component.html',
  styleUrls: ['./template-placeholders.component.scss']
})
export class TemplatePlaceholdersComponent implements OnInit {

  constructor(public templateService: TemplateService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  reload() {
    // this.templateService.activeTemplate.fields = this.templateService.activeTemplate.fields.map(f => {
    //   f.replacement = "Test";
    //   return f;
    // })
    this.templateService.reloadTemplate(this.templateService.activeTemplate);
  }

  getDocumentDownload() {
    if (this.templateService.activeTemplate) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.templateService.activeTemplate.document);
    }
  }
}
