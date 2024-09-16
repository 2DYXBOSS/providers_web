import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  imageSrc: string | ArrayBuffer | null = null;


  // onImageUpload(event: Event): void {
  //   const input = event.target as HTMLInputElement;

  //   if (input.files && input.files[0]) {
  //     const reader = new FileReader();
      

  //     reader.readAsDataURL(input.files[0]);


  //     reader.onload = () => {
  //       this.imageSrc = reader.result;
  //     };
  //   }
  // }


  // imageSrcs: string[] = [];


  // onImageUpload(event: Event): void {
  //   const input = event.target as HTMLInputElement;

  //   if (input.files) {

  //     this.imageSrcs = [];


  //     Array.from(input.files).forEach(file => {
  //       const reader = new FileReader();


  //       reader.readAsDataURL(file);


  //       reader.onload = () => {
  //         if (reader.result) {
  //           this.imageSrcs.push(reader.result as string);
  //         }
  //       };
  //     });
  //   }
  // }


  imageSrcs: string[] = [];

  ngOnInit() {
    // Récupérer les images stockées dans localStorage lors de l'initialisation du composant
    const storedImages = localStorage.getItem('images');
    if (storedImages) {
      this.imageSrcs = JSON.parse(storedImages);
    }
  }

  // Fonction pour gérer le changement d'image
  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      // Parcourir tous les fichiers sélectionnés
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();

        // Lire chaque image en tant que Data URL
        reader.readAsDataURL(file);

        // Une fois l'image chargée, ajouter l'URL dans le tableau
        reader.onload = () => {
          if (reader.result) {
            // Ajouter l'URL de l'image au tableau
            this.imageSrcs.push(reader.result as string);
            // Stocker les images mises à jour dans localStorage
            localStorage.setItem('images', JSON.stringify(this.imageSrcs));
          }
        };
      });
    }
  }
}
