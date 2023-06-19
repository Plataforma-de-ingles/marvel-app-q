import { Component, Input, OnChanges } from '@angular/core';
import { Character, ComicsItem } from 'src/app/core/models/characters-response..type';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnChanges {

  @Input() character!: Character;
  public tabs: string[] = ['comics', 'series', 'events'];
  public tabSelected: string = this.tabs[0];
  public dataSelected!: ComicsItem[];

  ngOnChanges(): void {
    this.dataSelected = this.character?.comics.items;
  }

  public onclickTab(tabName: string): void {
    const { comics, series, events } = this.character;
    const tabs: any = { comics, series, events };
    this.tabSelected = tabName;
    this.dataSelected = tabs[tabName].items;
  }

  public getSelectedTab(tabName: string): boolean {
    return tabName === this.tabSelected;
  }

}
