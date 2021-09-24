pipeline {
    agent any

    stages {

         stage('stop and remove container, image') {
            steps {
                script {
                    def imageExists = sh(script: 'docker images -q frontend', returnStdout: true) == ""
                    println imageExists

                    if( !imageExists ){
                           sh 'docker stop frontend_con'
                           sh 'docker rm frontend_con'
                           sh 'docker image rm frontend'
                    }else {
                        echo 'Skip this stage '
                    }
                }
            }
        }

        stage('remove whole data') {
            steps {
                sh 'rm -rf *'
            }
        }

        stage('git clone') {
            steps {
                git branch: 'main',
                    credentialsId: 'MKT_Jenkins',
                    url: 'https://github.com/INT222-Integrated-04-47-52/Frontend.git'
            }
        }

        stage('(deploy) start contianer') {
            steps {
                sh 'docker-compose up -d'
            }
        }

    }
}
