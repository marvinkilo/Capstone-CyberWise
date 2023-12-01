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
        sh 'docker rmi -f cyberwise '
        sh '''docker build   -t cyberwise .

'''
        sh 'docker run -p 5000:80 -d cyberwise '
      }
    }

    stage('Login to DockerHub') {
      environment {
        DOCKERHUB_USER = 'marvinkilo'
        DOCKERHUB_PASSWORD = 'Xsw7FgP&SR$xY$GCkizi2#'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

  }
}