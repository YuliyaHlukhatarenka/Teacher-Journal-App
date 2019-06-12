import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-message',
    template: `<h2><b>{{message}}</b></h2>`,
    styles: ['h2 {z-index: 2; position: absolute; top: 40%; left: 45%; color: orange; font-size: 40px; }']
})
export class MessageComponent {
    @Input() public message: string;
}
