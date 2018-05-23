import React from 'react'

const NoteForm = () => {
  return (
    <div 
    className="NoteForm"
    style= {styles.noteForm}
    >
      <div 
      className="form-actions"
      style= {styles.formActions}
      >
            <button 
            type="submit"
            style= {styles.Button}>
              <i 
              className="fa fa-trash-o"
              style= {styles.iFa}
              ></i>
            </button>
          </div>
          <form style= {styles.form}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style= {styles.input}
              ></input>
            </p>
            
            <textarea 
            name="body"
            style= {styles.textArea}
            ></textarea>
          </form>
        </div>
    
  )
}

const styles = {
  noteForm:{
    msFlexPositive: '1',
    flexGrow: '1',
    padding: '0 3rem',
  },
  formActions:{
    paddingTop: '1rem',
    marginLeft: '-2rem',
    display: '-ms flexbox',
    display: 'flex',
    msFlexLinePack: 'center',
    alignContent: 'center',
  },
  button:{
    border: 'none',
    background: 'none',
    padding: '0',
  },
  submitButton:{
    backgroundColor: '#008bf8',
    bordeRadius:'4px',
    color: '#fff',
    fontSize: '1.4rem',
    padding: '1rem',

  },
  iFa:{
    color:'#999',
    fontSize: '2rem',
    margin: '0',


    
  },
  form:{
    margin: '0 auto',
    maxWidth:'80rem',

  },
  input:{
    border:'none',
    fontSize: '200%',
    fontFamily: 'Fauna One',
    color: '#008bf8',
    fontWeight: '400',
    width: '100%',
    outline:'none',

    
  },
  textArea:{
    borderColor:'#eee',
    width:'100%',
    height: 'calc(50vh - 140px)',
    fontSize: '1.3em',
  }



}

export default NoteForm