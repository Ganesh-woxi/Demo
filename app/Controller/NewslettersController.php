<?php

class NewslettersController extends AppController {
    public $helpers = array('Html', 'Form', 'Session');
    public $components = array('Session');

    public function index() {
        $this->set('newsletters', $this->Newsletter->find('all'));
    } 
    public function view($id) {
        if (!$id) {
            throw new NotFoundException(__('Invalid post'));
        }

        $newsletter = $this->Newsletter->findById($id);
        if (!$newsletter) {
            throw new NotFoundException(__('Invalid post'));
        }
        $this->set('newsletter', $newsletter);
    }
    public function add() {
        if ($this->request->is('post')) {
            $this->Newsletter->create();
            if ($this->Newsletter->save($this->request->data)) {
            	
                $this->Session->setFlash(__('Your newsletter has been saved.'));
                return $this->redirect(array('action' => 'index'));
            }
            $this->Session->setFlash(__('Unable to add your newsletter.'));
        }
    }
    public function show() {
			if ($this->request->is('post')) {
            $this->Newsletter->create();
            if ($this->Newsletter->save($this->request->data)) {
            	
                $this->Session->setFlash(__('Your newsletter has been saved.'));
                return $this->redirect(array('action' => 'index'));
            }
            $this->Session->setFlash(__('Unable to add your newsletter.'));
        }
    }
    public function edit($id = null) {
	    if (!$id) {
	        throw new NotFoundException(__('Invalid newsletter'));
	    }

	    $newsletter = $this->Newsletter->findById($id);

	    if (!$newsletter) {
	        throw new NotFoundException(__('Invalid newsletter'));
	    }
	    
	    if ($this->request->is(array('post', 'put'))) {	    	
	        $this->Newsletter->id = $id;
	        echo $this->request->data['Newsletter']['title'];exit;
	        if ($this->Newsletter->save($this->request->data)) {
	            $this->Session->setFlash(__('Your newsletter has been updated.'));
	            return $this->redirect(array('action' => 'index'));
	        }
	        $this->Session->setFlash(__('Unable to update your newsletter.'));
	    }

	    if (!$this->request->data) {
	        $this->request->data = $newsletter;
	    }
	}
	public function delete($id) {
	    if ($this->request->is('get')) {
	        throw new MethodNotAllowedException();
	    }

	    if ($this->Newsletter->delete($id)) {
	        $this->Session->setFlash(
	            __('The post with id: %s has been deleted.', h($id))
	        );
	        return $this->redirect(array('action' => 'index'));
	    }
	}	   
}

?>