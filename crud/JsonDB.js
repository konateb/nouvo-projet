import { v4 as uuidv4 } from "uuid";
import fs from "node:fs";

class JsonDB {
  constructor(filename) {
    this.filename = filename;
    this.data = {
      students: [],
      profs: [],
      courses: [],
    };
    this.loadData();
  }

  // Charger les données depuis le fichier JSON
  loadData() {
    try {
      const data = fs.readFileSync(this.filename, "utf8");
      this.data = JSON.parse(data);
    } catch (err) {
      this.data = {
        students: [],
        profs: [],
        courses: [],
      };
    }
  }

  // Sauvegarder les données dans le fichier JSON
  saveData() {
    fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2), "utf8");
  }

  // Méthode CREATE : Ajouter un nouvel élément à un tableau spécifique
  create(type, item) {
    if (type in this.data) {
      if (type === "courses" && item.prof) {
        // Trouver le professeur et ajouter le cours à ses données
        const professeur = this.data.profs.find(
          (prof) => prof.id === item.prof
        );
        if (professeur) {
          professeur.cours = item.titre;
        }
      }
      item.id = uuidv4(); // Générer un identifiant unique
      this.data[type].push(item);
      this.saveData();
    }
  }

  // Méthode READ : Obtenir tous les éléments d'un tableau spécifique
  readAll(type) {
    if (type in this.data) {
      return this.data[type];
    } else {
      return null;
    }
  }

  // Méthode READ : Obtenir un élément par son ID depuis un tableau spécifique
  readOne(type, id) {
    if (type in this.data) {
      return this.data[type].find((item) => item.id === id) || null;
    } else {
      return null;
    }
  }

  // Méthode UPDATE : Mettre à jour un élément par son ID dans un tableau spécifique
  update(type, id, newItem) {
    if (type in this.data) {
      const index = this.data[type].findIndex((item) => item.id === id);
      if (index !== -1) {
        this.data[type][index] = newItem;
        this.saveData();
      }
    }
  }

  // Méthode DELETE : Supprimer un élément par son ID depuis un tableau spécifique
  delete(type, id) {
    if (type in this.data) {
      const index = this.data[type].findIndex((item) => item.id === id);
      if (index !== -1) {
        this.data[type].splice(index, 1);
        this.saveData();
      }
    }
  }
  // Méthode pour enregistrer un étudiant à un cours donné
  enrollStudentToCourse(studentId, courseId) {
    const student = this.readOne("students", studentId);
    const course = this.readOne("courses", courseId);

    if (student && course ) {
      // Vérifie si l'étudiant n'est pas déjà inscrit au cours n'a pas plus que 4 cours
      if (!course.inscrits.includes(studentId) && student.courses.length <= 4) {
        course.inscrits.push(studentId);
        this.update("courses", courseId, course);

        // Met à jour les informations de l'étudiant
        student.mesCourses.push(courseId);
        this.update("students", studentId, student);

        this.saveData();
      }
    }
  }
}

export default JsonDB; // Exporte la classe CRUDWithJSON
