import styles from './Header.module.css'

function Header({ children, image}) {
  return (
    <header
      className={styles.header}
      style={{
        background:`url('${image}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
      }}
       
    >
      <div className={styles.headerCafe}>
        {children}
      </div>

    </header>
  )


}

Header.defaultProps = {
  image:'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee1.jpg'
}



export default Header