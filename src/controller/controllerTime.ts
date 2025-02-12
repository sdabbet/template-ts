class controllerTime{

private backgroundColor: string;

constructor() {
    this.backgroundColor = '#FFFFFF';
}

changeBackgroundColor() {
    this.backgroundColor = this.backgroundColor === '#FFFFFF' ? '#FBE106' : '#FFFFFF';
}

}