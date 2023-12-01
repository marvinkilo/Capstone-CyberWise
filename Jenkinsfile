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
        sh 'docker rmi -f marvinkilo/cyberwise'
        sh '''docker build   -f ./Dockerfile -t marvinkilo/cyberwise:latest .

'''
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

    stage('push') {
      steps {
        sh 'docker push marvinkilo/cyberwise:latest'
      }
    }
    post {
    always {
      script {
        if (currentBuild.currentResult == 'FAILURE') {
          step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: "abc.xyz@blabl.com", sendToIndividuals: true])
        }
      }
    }

  }
}
