pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/marvinkilo/Capstone-CyberWise', branch: 'main')
      }
    }

    stage('Logs') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh '''docker build   -t cyberwise .

'''
        sh 'docker run -p 5000:80 cyberwise '
      }
    }

  }
}