import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    constructor(private _e1:ElementRef){}
    @HostBinding('class.show') isOpen =false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        this._e1.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')

    }
}   