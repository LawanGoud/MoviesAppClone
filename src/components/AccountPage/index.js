import Cookies from 'js-cookie'
import Header from '../Header'
import FooterSection from '../FooterSection/index'
import './index.css'

const AccountPage = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="account-section-bg-container">
        <h1 className="account-title">Account</h1>
        <hr className="ruler" />
        <div className="membership-container">
          <p className="account-description">Membership:</p>
          <div className="user-details-container">
            <p className="account-details">rahul@gmail.com</p>
            <p className="account-password">Password : ************</p>
          </div>
        </div>
        <hr className="ruler" />
        <div className="membership-container">
          <p className="account-description">Plan details:</p>
          <p className="account-details">
            Premium<span className="ultra-text">Ultra HD</span>
          </p>
        </div>
        <hr className="ruler" />
        <div className="button-container">
          <button
            className="Logout-button"
            type="button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="account-footer">
        <FooterSection />
      </div>
    </>
  )
}

export default AccountPage
