// Liskov subtitution principle

class Person {}

class Member extends Person {
    access() {
        console.log("You are having permission.");
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class AnotherCompanyWorker extends Guest {
    access() {
        throw new Error('You have no access.')
    }
}

function openSecretDoor(member) {
    member.access()
}

// openSecretDoor(new Frontend());
// openSecretDoor(new Backend());
// openSecretDoor(new AnotherCompanyWorker()); // Here must be class extended on Member


//==================================

class Component {
    isComponent = true
}

class TemplateComponent extends Component {
    render() {
        return `
            <div>Render component</div>
        `
    }
}

class HigherOrderComponent extends Component {
    render() {
        throw new Error("It is not template component!")
    }
}

class Header extends TemplateComponent {
    onInit() {}
}

class Footer extends TemplateComponent {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function valid(component) {
    console.log(component.render())
}

valid(new Header)
valid(new Footer)
    // valid(new HOC)