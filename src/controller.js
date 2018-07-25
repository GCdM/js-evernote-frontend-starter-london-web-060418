class Controller {

  static renderPreview(note){
    const preview = document.createElement('li')

    preview.innerHTML=`<h6> ${note.title} </h6>`
    document.getElementById('preview-list').append(preview)
  }// end of renderPreview



  static renderContent(){

  }

}//end of controller
