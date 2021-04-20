const { sh, cli, help  } = require('tasksfile')

DOCKER_MASTER_WORKER_IMAGE_NAME = 'hkserver_master_worker'

function build_hkserver_master_worker_image() {
  sh(`docker build -t ${DOCKER_MASTER_WORKER_IMAGE_NAME} -f ./worker/Dockerfile.hkserver_worker .`, { nopipe: true })
}
help(build_hkserver_master_worker_image, 'Build image for worker')

cli({
  build_hkserver_master_worker_image
})
