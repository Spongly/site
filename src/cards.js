import React from 'react'

export const IntroCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">person</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">pseudoName</span>: <span className="cm-string">"Spongly"</span>, &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">lastname</span>: <span className="cm-string">"Idiot"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">age</span>: <span className="cm-string">"14"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">gender</span>: <span className="cm-string">"Male"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">hobbies</span>: [<span className="cm-string">"Breathing"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Programming"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Playing video Games"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"hiding dead bodies"</span>],</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">state</span>: <span className="cm-string">"oblivion"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">funFact</span>: <span className="cm-string">"sdrawkcab etirw nac I"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const LangCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">skills</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Python</span> : <span className="cm-string">"Learning"</span>, &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">React</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">NodeJs</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Javascript</span>: <span className="cm-string">"Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">CSS</span>: <span className="cm-string">"Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Git</span>: <span className="cm-string">"Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Azure</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">MongoDB</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Unity</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Blender</span>: <span className="cm-string">"Will Be Learning"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Life</span>: <span className="cm-string">"Beginner"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const SocialCard = (props)=>{
  const stoprop = (e)=>{
    e.stopPropagation();
  }

 return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">socialLinks</span> <span className="cm-operator">=</span> {"{"}</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">github</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://github.com/spongly"
            target="_blank">"github.com/spongly"</a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">twitter</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://twitter.com/"
            target="_blank">"twitter.com"
          </a>
          </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">codeforces</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codeforces.com"
            target="_blank">"codeforces.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">gmail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="mailto:mail.spongly@gmail.com"
            target="_blank">"mail.spongly@gmail.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">spotify</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://open.spotify.com"
            target="_blank">""
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">behance</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://behance.net/blueedgetechno"
            target="_blank">"behance.net/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">codepen</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codepen.io/blueedgetechno"
            target="_blank">"codepen.io/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">dev</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://dev.to/blueedgetechno"
            target="_blank">"dev.to/blueedgetechno"
          </a>
        </span></span>,</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">stackoverflow</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://stackoverflow.com/users/12115721/blue-edge"
            target="_blank">"../users/12115721/blue-edge"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">discord</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://discord.com/app"
            target="_blank">"Blue Edge#1017"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">youtube</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://www.youtube.com/channel/UCozhS3MxzCGrPTffh0mqArw"
            target="_blank">"../channel/UCozhS3MxzCGrPTffh0mqArw"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const ProjectCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">projects</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Coming soon!</span>: <span className="cm-string">""</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-operator"></span><span className="cm-string">""</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property"></span>: <span className="cm-string">""</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> <span className="cm-operator"></span><span className="cm-string">""</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property"></span>:<span className="cm-string">""</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp; <span className="cm-operator"></span><span className="cm-string">"c"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property"></span>: <span className="cm-string">""</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp;<span className="cm-operator"></span><span className="cm-string">""</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"} <span className="cm-comment">// And that's just the tip of the fireball</span></span></pre>
      </div>
    </div>
  )
}
