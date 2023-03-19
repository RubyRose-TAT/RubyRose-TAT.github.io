addEventListener('DOMContentLoaded', function () {
  let models = [
    {
      width: '285',
      height: '285',
      left: '-5px',
      bottom: '-6px',
      role: 'https://npm.elemecdn.com/chenyfan-oss@2.0.2/lafei_4.model3.json',
      background: '',
      opacity: 1,
      mobile: false,
      scale: 0.04,
      draggable: false,
      pierceThrough: false,
    }
  ]
  new Live2dLoader(models)
})
