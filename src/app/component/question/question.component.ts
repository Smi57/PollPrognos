import { Component, Input, OnInit, input } from '@angular/core';
import { PropositionData, Question } from '../../models/poll.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from '../../services/question.service';
import { UserService } from '../../services/user.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

  @Input() question!: Question;
  @Input() valeur!: string;
  @Input() propositionData!: PropositionData;
  propositionDatas: any = [];
  buttonText!: string;

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";
  constructor(private route: ActivatedRoute,
    private userSerice: UserService,
    private http: HttpClient,
    private questionsService: QuestionsService
   ) { }

  ngOnInit() {
    this.buttonText = 'Equipe GAGNANTE'//'Victoire pour cette equipe ?'
    this.refreshPropositionDatas();
  }

  onClic(pID: any) {
    console.log("Btn : " + pID)
    console.log(this.valeur)
    console.log(this.buttonText)
    this.managAddAnswer(this.question.id, pID, this.valeur);
    //this.deleteAnswers(this.question.id);
    //this.addAnswer(this.question.id, this.valeur, "Equipe PERDANTE")
    //this.updateAnswer(pID, this.valeur, "Equipe GAGNANTE")
    this.refreshPropositionDatas();
  }

  refreshPropositionDatas() {
    console.log(this.valeur)
    this.userSerice.valeur$.subscribe(valeur => {
      this.valeur = valeur;
    })
    //const QuestId = +this.route.snapshot.params['idQuest'];
    const QuestId = this.question.id;
    console.log("test01 :" + QuestId)
    this.http.get(`${this.APIUrl}GetPropositionDataUser?id=${QuestId}&login=${this.valeur}`).subscribe(async data => {
      this.propositionDatas = data;
      if (this.propositionDatas[1].Choice === null) {
        this.buttonText = 'Victoire pour cette equipe ?';
      } else {
        this.buttonText = this.propositionDatas[1].Choice.trim();
      }
      console.log("test07 :" + this.propositionDatas[1].Choice)
    })
  }
  deleteAnswers(id: number) {
    console.log("ID de la proposition à supprimer :", id);

    this.http.delete(`${this.APIUrl}DeleteAnswer?id=${id}`).subscribe({
      next: (response) => {
        console.log("Proposition supprimée avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après la suppression
      },
      error: (error) => {
        console.error("Erreur lors de la suppression de la proposition :", error);
      }
    });
  }

  addAnswer(id_Question: number, id_User: string, choice: string) {

    this.http.post(`${this.APIUrl}AddAnswer`, {
      id_QuestSection: id_Question,
      choice: choice,
      id_User: id_User
    }).subscribe({
      next: (response) => {
        console.log("Proposition ajoutée avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après l'ajout
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout de la proposition :", error);
      }
    });
  }

  updateAnswer(id_Section: number, id_User: string, choice: string) {

    this.http.put(`${this.APIUrl}updateAnswer`, {
      id_QuestSection: id_Section,
      choice: choice,
      id_User: id_User
    }).subscribe({
      next: (response) => {
        console.log("Proposition mise à jour avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après la mise à jour
      },
      error: (error) => {
        console.error("Erreur lors de la mise à jour de la proposition :", error);
      }
    });
  }

  managAddAnswer(id_Question: number, id_Section: number, id_User: string) {
    console.log("ID de la proposition à supprimer :", id_Question);

    // Créer un observable pour gérer les opérations séquentiellement
    this.http.delete(`${this.APIUrl}DeleteAnswer?id=${id_Question}`).pipe(
      tap(response => {
        console.log("Proposition supprimée avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après la suppression
      }),
      switchMap(() => {
        console.log("ID de la question des answers à ajouter :", id_Question);
        // Ajout de la proposition
        return this.http.post(`${this.APIUrl}AddAnswer`, {
          id_QuestSection: id_Question,
          choice: "Equipe PERDANTE",
          id_User: id_User
        });
      }),
      tap(response => {
        console.log("Proposition ajoutée avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après l'ajout
      }),
      switchMap(() => {
        console.log("ID de la question de la answers à modifier :", id_Question);
        // Mise à jour de la proposition
        return this.http.put(`${this.APIUrl}updateAnswer`, {
          id_QuestSection: id_Section,
          choice: "Equipe GAGNANTE",
          id_User: id_User
        });
      }),
      tap(response => {
        console.log("Proposition mise à jour avec succès :", response);
        this.refreshPropositionDatas(); // Rafraîchir les données après la mise à jour
      })
    ).subscribe({
      error: (error) => {
        console.error("Erreur lors de l'opération :", error);
      }
    });
  }


}

