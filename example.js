class componentError extends Error {
  constructor(errorMessage) {
    super(errorMessage)

    this.componentTitle = 'title'
    this.componentConfiguration = 'Basic'
  }
}

const eComponent = new componentError('A Big Error');
eComponent.componentConfiguration
