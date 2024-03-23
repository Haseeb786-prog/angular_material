import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Gamedata } from '../userData';
import { MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data = new MatTableDataSource<any>(Gamedata);
  column: string[] = ['id', 'Gamename', 'platform', 'tag', 'Action'];
  pageSizeOptions = [5, 10, 25];
  isEditing = false;
  selectedGame: any;
  
  newGameId: string = '';
  newGameName: string = '';
  newGamePlatform: string = '';
  newGameTag: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  }

  editGame(game: any) {
    this.isEditing = true;
    this.selectedGame = game;
  }

  cancelEditing() {
    this.isEditing = false;
    this.selectedGame = null;
  }

  saveGame() {

    this.isEditing = false;
    this.selectedGame = null;
  }

  deleteGame(id: string) {
   
    const gameIndex = this.data.data.findIndex((game: any) => game.id === id);
    if (gameIndex !== -1) {
      this.data.data.splice(gameIndex, 1);
      this.data._updateChangeSubscription();
    }
  }
  addNewGame() {
    const newGame = { 
      id: this.newGameId, 
      Gamename: this.newGameName, 
      platform: this.newGamePlatform, 
      tag: this.newGameTag 
    };
    this.data.data.push(newGame);
    this.data._updateChangeSubscription();
    
    // Reset form fields after adding the new game
    this.newGameId = '';
    this.newGameName = '';
    this.newGamePlatform = '';
    this.newGameTag = '';
  }
}
