

const handlingForms = {
    data() {
        return {
            members: [
                {
                    fname: 'John',
                    lname: 'Lennon',
                    instrument: 'Acoustic Guitar',
                    active: false
                },
                {
                    fname: 'George',
                    lname: 'Harrison',
                    instrument: 'Electric Guitar',
                    active: false
                }
            ],
            newMember: {
                fname: null,
                lname: null,
                instrument: null,
                active: false
            },
            editingIndex: null
        }
    },
    methods: {
        addMember: function() {
            if (this.editingIndex === null) {
                // Add new member
                this.members.push({
                    fname: this.newMember.fname,
                    lname: this.newMember.lname,
                    instrument: this.newMember.instrument,
                    active: false
                });
            } else {
                // Update existing member
                const member = this.members[this.editingIndex];
                member.fname = this.newMember.fname;
                member.lname = this.newMember.lname;
                member.instrument = this.newMember.instrument;
                member.active = false;
                this.editingIndex = null;
            }
            this.newMember = {
                fname: null,
                lname: null,
                instrument: null,
                active: false
            };
        },
        editMember: function(member, idx) {
            this.newMember = {
                fname: member.fname,
                lname: member.lname,
                instrument: member.instrument,
                active: member.active
            };
            this.editingIndex = idx;
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
