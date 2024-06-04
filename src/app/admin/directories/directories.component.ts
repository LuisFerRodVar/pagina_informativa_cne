import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Directory {
  id: number;
  nombre: string;
  cargo: string;
  institucion: string;
  mesa: string;
  correo: string;
}

@Component({
  selector: 'app-directories',
  standalone: true,
  imports: [],
  templateUrl: './directories.component.html',
  styleUrl: './directories.component.css'
})
export class DirectoriesComponent {
  searchQuery = new FormControl('');
  showRegistrationForm: boolean = false;
  directories: Directory[] = [
    { id: 1, nombre: 'Director 1', cargo: 'Cargo 1', institucion: 'Institución 1', mesa: 'Mesa 1', correo: 'correo1@example.com' },
    { id: 2, nombre: 'Director 2', cargo: 'Cargo 2', institucion: 'Institución 2', mesa: 'Mesa 2', correo: 'correo2@example.com' },
  ];
  filteredDirectories: Directory[] = [...this.directories];

  directoryForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    institucion: new FormControl('', Validators.required),
    mesa: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  });

  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredDirectories = this.directories.filter(
      (directory) =>
        directory.nombre.toLowerCase().includes(query) ||
        directory.cargo.toLowerCase().includes(query) ||
        directory.institucion.toLowerCase().includes(query) ||
        directory.mesa.toLowerCase().includes(query) ||
        directory.correo.toLowerCase().includes(query)
    );
  }

  addDirectory() {
    this.showRegistrationForm = true;
  }

  onSubmit() {
    /*
    if (this.directoryForm.valid) {
      const newDirectory: Directory = {
        id: this.directories.length + 1,
        ...this.directoryForm.value
      };
      this.directories.push(newDirectory);
      this.search(); // Update the filtered list after adding a new directory
      this.showRegistrationForm = false;
      this.directoryForm.reset();
    }*/
  }

  closeModal() {
    this.showRegistrationForm = false;
  }

  editDirectory(directory: Directory) {
    const index = this.directories.findIndex((d) => d.id === directory.id);
    if (index !== -1) {
      this.directories[index] = { ...directory, nombre: directory.nombre + ' (Editado)' };
      this.search(); // Update the filtered list after editing a directory
    }
  }

  deleteDirectory(directory: Directory) {
    this.directories = this.directories.filter((d) => d.id !== directory.id);
    this.search(); // Update the filtered list after deleting a directory
  }
}