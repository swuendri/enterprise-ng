import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoPopupMenuComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-popupmenu-demo',
  templateUrl: 'popupmenu.demo.html',
})
export class PopupMenuDemoComponent implements OnInit {

  public isInsertCommentDisabled = true;
  public isInsertNoteDisabled = true;
  public insertCommentText = 'Enable';
  public insertNoteText = 'Enable';

  showMenu = true;

  public options = {
    autoRefresh: true,
    showLabel: true,
    showAxis: false,
    autoScale: false,
  };

  public suiteOptions: string[] = ['Hello', 'World', 'Team'];

  @ViewChild('popmenutrigger', { static: true })
  public popupMenu!: SohoPopupMenuComponent;

  ngOnInit(): void { }

  public onClick($event?: any): void {
    console.log(`Popupmenu isMultiSelectable: ${this.popupMenu.isMultiselectable}`);
    console.log(`Popupmenu Selected: ${this.popupMenu.getSelected().length}`);
    console.log(`event: ${$event}`);
  }

  onMenu(item: number) {
    if (item === 3) {
      this.showMenu = false;
    }
  }

  onInsertCommentButtonClicked() {
    this.isInsertCommentDisabled = !this.isInsertCommentDisabled;
    this.insertCommentText = this.isInsertCommentDisabled ? 'Enable' : 'Disable';
  }

  onInsertNoteClicked() {
    this.isInsertNoteDisabled = !this.isInsertNoteDisabled;
    this.insertNoteText = this.isInsertNoteDisabled ? 'Enable' : 'Disable';
  }

  onSelected(event: SohoPopupMenuEvent) {
    console.log('PopupMenu Demo: popupmenu.onSelected');
    $('body').toast({
      title: 'Selected',
      message: 'Popupmenu Item "' + $(event.args).text().trim() + '" selected.'
    });
  }

  onBeforeOpen(_event: SohoPopupMenuEvent) {
    console.log('PopupMenu Demo: popupmenu.onBeforeOpen');
  }

  onClose(_event: SohoPopupMenuEvent) {
    console.log('PopupMenu Demo: popupmenu.onClose');
  }

  onOpen(_event: SohoPopupMenuEvent) {
    console.log('PopupMenu Demo: popupmenu.onOpen');
  }

  toggleOption(option: string) {
    // @ts-ignore
    this.options[option] = !this.options[option];
  }
}
