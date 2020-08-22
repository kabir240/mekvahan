import React , { useState }from 'react';
import './home.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import { TabProvider, Tab, TabPanel, TabList} from "react-web-tabs";
import { Card, Button, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useForm} from 'react-hook-form';

let addressObject = {};
let addressadd = false;
const Home = (props) => {
    function renderContent(addressadd, addressObject) {
        if (addressadd){
            return(
                <div>
                <div className="row bgcolor pt-4" style={{"margin": "0px 15px 35px 15px","min-height":"482px"}}>
                    <div className="col-12 col-md-6">
                        <Card body>
                        <CardTitle className="customcardhead"><img className="img-fluid mr-1" src="assets/images/home.png"></img> Home</CardTitle>
                        <CardText className="customcardtext">{addressObject.home}</CardText>
                        <div className="row ml-3">
                        <Button className="customcardbutton">Edit</Button>
                        <Button className="customcardbutton2">Delete</Button>
                        </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card body>
                        <CardTitle className="customcardhead"><img className="img-fluid mr-1" src="assets/images/office.png"></img> Office</CardTitle>
                        <CardText className="customcardtext">{addressObject.office}</CardText>
                        <div className="row ml-3">
                        <Button className="customcardbutton">Edit</Button>
                        <Button className="customcardbutton2">Delete</Button>
                        </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card body>
                        <CardTitle className="customcardhead"><img className="img-fluid mr-1" src="assets/images/pg.png"></img> PG</CardTitle>
                        <CardText className="customcardtext">{addressObject.pg}</CardText>
                        <div className="row ml-3">
                        <Button className="customcardbutton">Edit</Button>
                        <Button className="customcardbutton2">Delete</Button>
                        </div>
                        </Card>
                    </div>
                </div>     
                </div>
            );
        }else{
            return(
            <div>
            <div className="row bgcolor justify-content-center pt-5 pb-5" style={{"margin": "0px 15px 35px 15px"}}>
                <img className="img-fluid" src="assets/images/noadress.png"></img>
            </div>
            </div>
        );
        }
    }
    let content = renderContent(addressadd, addressObject);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { handleSubmit, register, errors } = useForm();
    function onSubmit (values) {
        console.log(values);
        addressObject = values;
        addressadd = true;
    }
    return(
        <div className="">
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="customhead">Add Addresses</ModalHeader>
        <ModalBody>
        <div className="row mt-3 justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="floating-form">
                    <div class="floating-label">      
                        <input class="floating-input" type="text" name="home" placeholder=" " ref={register({required: "Required"})}></input>
                        <span class="highlight"></span>
                        <label>Home Address</label>
                    </div>

                    <div class="floating-label mt-5">      
                        <input class="floating-input" type="text" name="office" onclick="(this.type='time')" placeholder=" " ref={register({required: "Required"})}></input>
                        <span class="highlight"></span>
                        <label>Office Address</label>
                    </div>
                    <div class="floating-label mt-5">      
                        <input class="floating-input" type="text" name="pg" onclick="(this.type='time')" placeholder=" " ref={register({required: "Required"})}></input>
                        <span class="highlight"></span>
                        <label>PG Address</label>
                    </div>
                </div>
                <div className="row justify-content-center" style={{"margin-top": "40px"}}>
                <Button type="submit" className="customcardbutton" onClick={toggle}>Save</Button>
                </div>
            </form>
        </div>
        </ModalBody>
        </Modal>
        <div className="container bg-light pt-4">
                <div className="row bg-light">
                <TabProvider defaultTab="custom-tab-two">
                <div className="col-4">
                    <div className="row customrow bgcolor">
                    <div className="col-3">
                    <img className="customimg5" src="assets/images/circlegrey.png"></img>
                    </div>
                    <div className="col-9 welcometext">Hi<br />Mekvahan!</div>
                    </div>
                    <TabList className="my-custom-tablist bgcolor">
                        <Tab tabFor="custom-tab-one" className="customhead3" >My Profile</Tab>
                        <span className="divider" role="presentation" aria-hidden="true"></span>
                        <Tab tabFor="custom-tab-two" className="customhead3">Manage Addresses</Tab>
                        <span className="divider" role="presentation" aria-hidden="true"></span>
                        <Tab tabFor="custom-tab-three" className="customhead3">Change Password</Tab>
                    </TabList>
                </div>
                <div className="col-8 2">
                   <div className="my-tabs-panel-wrapper">
                        <TabPanel tabId="custom-tab-one">
                        <p>profile content</p>
                        </TabPanel>
                        <TabPanel tabId="custom-tab-two">
                            <div className="row bgcolor border-bottom" style={{"margin": "0px 15px"}}>
                                <div className="col-7 customhead1">My Addresses</div>
                                <div className="col-5 customhead2"><a style={{"cursor": "pointer"}} onClick={toggle}>+ Add Addresses</a></div>
                            </div>
                            {content}
                        </TabPanel>
                        <TabPanel tabId="custom-tab-three">
                        <p>Password content</p>
                        </TabPanel>
                    </div>
                </div>
                </TabProvider>
            </div>
        </div>
        </div>
    );
}

export default Home;