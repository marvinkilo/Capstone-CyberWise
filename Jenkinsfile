pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/marvinkilo/Capstone-CyberWise', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t CyberWise .'
      }
    }

  }
}