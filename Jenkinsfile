pipeline {
    environment {
        REGISTRY = "registry.hooray.site"
        REGISTRY_CREDENTIAL = 'komphet-hooray-registry-credentials'
        DOCKER_IMAGE = 'hooray/bangbow/admin'
        DOCKER_BUILDKIT = '1'
    }
    agent any
    stages {
      stage('Build') {
        when {
            expression { env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'main' }
        }

      }
      steps {
        script {
          docker.withRegistry("https://${REGISTRY}", "${REGISTRY_CREDENTIAL}") {

            echo "Starting to build docker image: ${REGISTRY}/${DOCKER_IMAGE}:${env.GIT_COMMIT.substring(0,7)}"
            def appImage = docker.build("${REGISTRY}/${DOCKER_IMAGE}","--network host --build-arg DOCKER_IMAGE_TAG=${env.GIT_COMMIT.substring(0,7)} .")

            echo "Pushing image to registry: ${REGISTRY}/${DOCKER_IMAGE}:${env.GIT_COMMIT.substring(0,7)}"
            appImage.push("${env.GIT_COMMIT.substring(0,7)}")

            echo "Pushing image to registry: latest"
            appImage.push("latest")

            echo "Removing image: ${REGISTRY}/${DOCKER_IMAGE}:${env.GIT_COMMIT.substring(0,7)}"
            sh "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:${env.GIT_COMMIT.substring(0,7)}"

            echo "Removing image: ${REGISTRY}/${DOCKER_IMAGE}:latest"
            sh "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:latest"

            echo "Cleaning docker"
            sh "docker system prune"
          }
        }

      }
    }

}

