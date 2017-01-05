node {
  stage('Preparation') { // for display purposes
    // Get some code from a GitHub repository
    git 'https://github.com/botagar/Jetpack-WebFrontEnd'
    sh "npm install"
  }
  stage('Test') {
    sh "npm run test"
  }
  stage('Package') {
    sh "npm run build"
   }
}
timeout(time:1, unit:'DAYS') {
    input message:'Deploy?'
}
node {
  stage('Deploy') {
    sh "ansible-playbook -u '${DEPLOY_USER}' -i '${DEPLOY_HOST},' deployment/deploy.yml"
  }
}
