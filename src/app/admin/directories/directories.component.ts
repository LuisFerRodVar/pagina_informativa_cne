import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectoryService } from '../../services/directory.service';
import { DirectoryDto } from '../../models/directory';

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
  styleUrls: ['./directories.component.css'],
})
export class DirectoriesComponent implements OnInit {
  searchQuery = new FormControl('');
  directories: DirectoryDto[] = [
   
  ];
  filteredDirectories: DirectoryDto[] = [...this.directories];
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
  constructor(private _directoryService: DirectoryService) {}
  ngOnInit(): void {
    this._directoryService.getAll().subscribe((res) => {
      console.log(res);
      this.directories = res;
      this.directories.sort((a, b) => {
        if (a.table < b.table) {
          return -1;
        }
        if (a.table > b.table) {
          return 1;
        }
        return 0;
      });
      
      this.filteredDirectories = res;
    });
  }
  search() {
    const query = this.searchQuery.value?.toLowerCase() || '';
    this.filteredDirectories = this.directories.filter(
      (directory) =>
        directory.name.toLowerCase().includes(query) ||
        directory.job.toLowerCase().includes(query) ||
        directory.institution.toLowerCase().includes(query) ||
        directory.table.toLowerCase().includes(query) ||
        directory.mail.toLowerCase().includes(query)
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

  async saveDirectory() {
    if (this.isEditing && this.currentDirectoryId !== null) {
      /*  const directoryItem = this.directories.find(
        (d) => d.Id === this.currentDirectoryId+""
      );
      if (directoryItem) {
        directoryItem.nombre = this.directoryForm.get('nombre')!.value || '';
        directoryItem.cargo = this.directoryForm.get('cargo')!.value || '';
        directoryItem.institucion =
          this.directoryForm.get('institucion')!.value || '';
        directoryItem.mesa = this.directoryForm.get('mesa')!.value || '';
        directoryItem.correo = this.directoryForm.get('correo')!.value || '';
        this.search();
        console.log('Directorio editado:', directoryItem);
      }*/
    } else {
      const newDirectory: DirectoryDto = {
        Id: '',
        name: this.directoryForm.get('nombre')!.value || '',
        job: this.directoryForm.get('cargo')!.value || '',
        institution: this.directoryForm.get('institucion')!.value || '',
        table: this.directoryForm.get('mesa')!.value || '',
        mail: this.directoryForm.get('correo')!.value || '',
      };
      
      this.search();
      
    await this._directoryService.create(newDirectory);
      
      
    }
    this.closeModal();
  }

  editDirectory(directory: DirectoryDto) {
    this.isEditing = true;
    /* this.currentDirectoryId = directory.id;
   /* this.directoryForm.setValue({
      nombre: directory.nombre,
      cargo: directory.cargo,
      institucion: directory.institucion,
      mesa: directory.mesa,
      correo: directory.correo,
    });*/
    this.isModalOpen = true;
  }

  openDeleteModal(directory: DirectoryDto) {
    //  this.directoryToDelete = directory;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.directoryToDelete = null;
  }

  confirmDelete() {
    if (this.directoryToDelete) {
      /* this.directories = this.directories.filter(
        (d) => d.Id !== this.directoryToDelete!.
      );
      this.search();
      console.log('Directorio eliminado:', this.directoryToDelete);
      this.closeDeleteModal();*/
    }
  }
}
