import styled from 'styled-components';

const Login = (props) => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src='/images/cta-logo-one.svg' />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
	font-size: 5rem;
`;

const BgImage = styled.div`
	height: 100%;
	background-image: url('/images/login-background.jpg');
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
`;

const CTA = styled.div`
	margin-bottom: 2vw;
	max-width: 650px;
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 0;
	align-items: center;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	transition-timing-function: ease-out;
	transition: opacity 0.2s;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

export default Login;
