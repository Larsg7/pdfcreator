import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-template-display',
  templateUrl: './template-display.component.html',
  styleUrls: ['./template-display.component.scss']
})
export class TemplateDisplayComponent implements OnInit {

  public safeUri: SafeUrl;

  constructor(public templateService: TemplateService,
              private sanitizer: DomSanitizer) {
    this.templateService.activeTemplateSub.subscribe(template => {
      this.safeUri = this.makeSafeURL(template.document);
    });
  }

  ngOnInit() {
  }

  private makeSafeURL(unsafe: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafe);
  }
}
