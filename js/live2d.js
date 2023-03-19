addEventListener('DOMContentLoaded', function () {
  let models = [
    {
      width: '500',
      height: '437.5',
      left: '-100px',
      bottom: '-20px',
      role: 'https://npm.elemecdn.com/chenyfan-oss@2.0.2/lafei_4.model3.json',
      background: '',
      opacity: 1,
      mobile: false,
      scale: 0.75,
      draggable: false,
      pierceThrough: true,
    }
  ]
  new Live2dLoader(models)
})
