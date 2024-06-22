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
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})
export class DirectoriesComponent {
  searchQuery = new FormControl('');
  directories: Directory[] = [
    { id: 1, nombre: 'Director 1', cargo: 'Cargo 1', institucion: 'Institución 1', mesa: 'Mesa 1', correo: 'correo1@example.com' },
    { id: 2, nombre: 'Director 2', cargo: 'Cargo 2', institucion: 'Institución 2', mesa: 'Mesa 2', correo: 'correo2@example.com' },
  ];
  filteredDirectories: Directory[] = [...this.directories];
  isModalOpen = false;
  isDeleteModalOpen = false;
  isEditing = false;
  currentDirectoryId: number | null = null;
  directoryToDelete: Directory | null = null;

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
    this.isEditing = false;
    this.currentDirectoryId = null;
    this.directoryForm.reset();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveDirectory() {
    if (this.isEditing && this.currentDirectoryId !== null) {
      const directoryItem = this.directories.find(d => d.id === this.currentDirectoryId);
      if (directoryItem) {
        directoryItem.nombre = this.directoryForm.get('nombre')!.value || '';
        directoryItem.cargo = this.directoryForm.get('cargo')!.value || '';
        directoryItem.institucion = this.directoryForm.get('institucion')!.value || '';
        directoryItem.mesa = this.directoryForm.get('mesa')!.value || '';
        directoryItem.correo = this.directoryForm.get('correo')!.value || '';
        this.search();
        console.log('Directorio editado:', directoryItem);
      }
    } else {
      const newDirectory: Directory = {
        id: this.directories.length + 1,
        nombre: this.directoryForm.get('nombre')!.value || '',
        cargo: this.directoryForm.get('cargo')!.value || '',
        institucion: this.directoryForm.get('institucion')!.value || '',
        mesa: this.directoryForm.get('mesa')!.value || '',
        correo: this.directoryForm.get('correo')!.value || ''
      };
      this.directories.push(newDirectory);
      this.search();
      console.log('Directorio agregado:', newDirectory);
    }
    this.closeModal();
  }

  editDirectory(directory: Directory) {
    this.isEditing = true;
    this.currentDirectoryId = directory.id;
    this.directoryForm.setValue({
      nombre: directory.nombre,
      cargo: directory.cargo,
      institucion: directory.institucion,
      mesa: directory.mesa,
      correo: directory.correo
    });
    this.isModalOpen = true;
  }

  openDeleteModal(directory: Directory) {
    this.directoryToDelete = directory;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.directoryToDelete = null;
  }

  confirmDelete() {
    if (this.directoryToDelete) {
      this.directories = this.directories.filter((d) => d.id !== this.directoryToDelete!.id);
      this.search();
      console.log('Directorio eliminado:', this.directoryToDelete);
      this.closeDeleteModal();
    }
  }
}
