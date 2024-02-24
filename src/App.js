
import './App.css';
import ContentWrapper from './components/ContainerWrapper/ContainerWrapper.js';
import PageHeader  from './components/PageHeader/PageHeader.js';
import PageContainer  from './components/PageContainer/PageContainer.js';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import UserListContainer from './components/UserListContainer/UserListContainer.js';

function App() {
  
  return (
    <div className="App">
      <PageContainer>
        <ContentWrapper>
          <PageHeader/>
          <UserListContainer/>
        </ContentWrapper>
      </PageContainer>
      
     
      
    </div>
  );
}

export default App;
