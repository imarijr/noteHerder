import React from 'react' 
import { ENETRESET } from 'constants';

const NoteList = () => {
    return(
        <div 
        className="NoteList"
        style = {styles.noteList}>
           <h3>Notes</h3>
          <ul 
          id="notes"
          style = {styles.ul}
          >
            <a 
            className="active"
            style = {styles.a}
            >
              <li 
              style = {styles.li}
              
              >
                <div 
                className="note"
                style={styles.firstNote}>
                  <div 
                  className="note-title"
                  style = {styles.noteTitle}
                  >
                    Kohlrabi welsh
                  </div>
                  <div 
                  className="note-body"
                  style = {styles.noteBody}
                  >
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a className='o'>
              <li 
              id = 'liOne'
              style = {styles.li}
              //onMouseOver = {liHover}
              >
                <div className="note" >
                  <div 
                  className="note-title" 
                  style = {styles.noteTitle}
                  >
                    Dandelion cucumber
                  </div>
                  <div 
                  className="note-body"
                  style = {styles.noteBody}
                  >
                    <p>
                      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li 
              style = {styles.li}
              
              >
                <div className="note">
                  <div 
                  className="note-title"
                  style = {styles.noteTitle}
                  >
                    Prairie turnip
                  </div>
                  <div 
                  className="note-body"
                  style = {styles.noteBody}
                  >
                    <p>
                      Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
        
    
    )
    
}

//function liHover(){
    
    //const a = document.querySelector().style.backgroundColor = '#008bf8'
 
 
 //}

const styles ={
    noteList:{
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem'
        
    },
    media:{
        maxWidth: '800px',
        width: '20rem,'
    },
    h3:{
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem'
    },
    ul:{
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999',
    },
    li:{
        height: '140px',
        fontSize: '90%',
        cursor: 'pointer',
        overFlow: 'hidden',

        
    },
    a:{
        WebkitTransition: 'background-color .ls ease-in-out, color .ls ease-in-out',
        OTransition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
    },
    firstNote:{
        borderTop: 'none',
    },
    noteTitle:{
        color: '#4a4a4a',
        fontFamily: 'Fauna One',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overFlowX: 'hidden',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipses',
    },
    noteBody:{
        fontSize: '1em',
        margin: '0',
        display: 'block',
        height: '100px',
        padding: '0',
        color: '#999',
        background: 'none',
        border: 'none',
        textDecoration: 'none',
    }

    }


export default NoteList