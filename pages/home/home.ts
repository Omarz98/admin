import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	notes= [];
    //@ViewChild('myNav') nav:NavController;
  	constructor(public navCtrl: NavController, public notesService: NotesService) {
  		//this.notes = this.notesService.getNotes();

      notesService.getNotes().valueChanges().subscribe( notas => {
        this.notes = notas;
      });
  	}

  	public goToDetail(id){
  		this.navCtrl.push(DetailPage, {id:id});

  	}

  	public createNotes(){
  		this.navCtrl.push(DetailPage, {id:0});
  	}


}