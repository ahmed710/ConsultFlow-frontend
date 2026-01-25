import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayscrollbarsModule } from "overlayscrollbars-ngx";
import { ColorPickerDirective } from 'ngx-color-picker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { TapToTop } from './components/tap-to-top/tap-to-top';
import { FullLayout } from './layouts/full-layout/full-layout';
import { SvgReplaceDirective } from './directives/svgReplace.directive';
import { AuthenticationLayout } from './layouts/authentication-layout/authentication-layout';
import { FullscreenDirective } from './directives/fullscreen.directive';

@NgModule({

    declarations: [
      Breadcrumb,
        Sidebar,
        Header,
        TapToTop,
        //ShowcodeCard,
        AuthenticationLayout,FullLayout,
        SvgReplaceDirective,
        HoverEffectSidebarDirective,
             FullscreenDirective,
    ],

    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,

        OverlayscrollbarsModule,
        NgbNavModule,


        ColorPickerDirective,
    ],
    exports: [
        CommonModule,
        Breadcrumb,
        Sidebar,
        //Switcher,
        Header,
        TapToTop,
        //ShowcodeCard,
        SvgReplaceDirective,
             FullscreenDirective,
        AuthenticationLayout,FullLayout,
        HoverEffectSidebarDirective,

    ],

})
export class SharedModule { }

