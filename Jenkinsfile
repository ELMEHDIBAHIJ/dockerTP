pipeline {
    agent { label 'docker-node' }

    stages {

         stage('Build Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }
    post {
      success {
        echo "pipline succeed "
      }
      failure {
        echo "pipline failed"
      }
}
}