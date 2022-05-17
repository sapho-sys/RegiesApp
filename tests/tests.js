describe('Registration App Testing' , function(){
    




    describe('Add registration plate' , function(){
        it('Should add "CA 123456" ' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CA 123456');

            assert.deepEqual({ 'CA 123456': 1 }, Instantiate.regNoAdded());

        });
        it('Should add "CL 990610" as the second regitsration number added' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CA 123456');
            Instantiate.addRegNo('CJ 990610');

            assert.deepEqual({ 'CA 123456': 1,  'CJ 990610': 1 }, Instantiate.regNoAdded());

        });
        it('Should add "CA 123 456" from Cape Town , "CJ 123-456" from Paarl, "CL 123456" from Stellenbosch & "CF 123-123" from Kuilsriver, giving them a value of 1 for each town' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CA 123 456');
            Instantiate.addRegNo('CJ 123-456');
            Instantiate.addRegNo('CL 123456');
            Instantiate.addRegNo('CF 123-123');

            assert.deepEqual({ 'CA 123 456': 1, 'CJ 123-456': 1, 'CL 123456': 1, 'CF 123-123': 1 } , Instantiate.regNoAdded());

        });
    });





    describe('Show registration plate' , function(){
        it('Should return registration numbers from Cape Town only "CA 123 456" & "CA 123456", if Cape Town is the selected town' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CA 123 456');
            Instantiate.addRegNo('CA 123456');
            Instantiate.addRegNo('CJ 123-456');
            Instantiate.addRegNo('CL 123456');
            Instantiate.showRegNo('Cape Town');

            assert.deepEqual([ 'CA 123 456', 'CA 123456' ], Instantiate.showTown());

        });
        it('Should return registration numbers from Kuilriver only "CF 123-456" & "CY 123-123", if Kuilsriver is the selected town' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CF 123-456');
            Instantiate.addRegNo('CL 123456');
            Instantiate.addRegNo('CF 123-123');
            Instantiate.showRegNo('Kuilsriver');

            assert.deepEqual([ 'CF 123-456', 'CF 123-123' ], Instantiate.showTown());

        });
        it('Should return registration numbers from Paarl only "CJ 456 789" , "CJ 456 456" & "CJ 990610", if Paarl is the selected town' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CJ 456 789');
            Instantiate.addRegNo('CJ 456 456');
            Instantiate.addRegNo('CA 456 789');
            Instantiate.addRegNo('CJ 990610');
            Instantiate.addRegNo('CL 123-123');
            Instantiate.showRegNo('Paarl');

            assert.deepEqual([ 'CJ 456 789', 'CJ 456 456', 'CJ 990610' ], Instantiate.showTown());

        });
        it('Should return an empty array if there is no registration number from Stellenbosch' , function(){
            let Instantiate = regFactory();

            Instantiate.addRegNo('CA 123 456');
            Instantiate.addRegNo('CA 123456');
            Instantiate.addRegNo('CJ 123-456');
            Instantiate.addRegNo('CY 123456');
            Instantiate.showRegNo('Stellenbosch');

            assert.deepEqual([], Instantiate.showTown());

        });
    });
       
    });





    // describe('Plate number formats' , function(){
    //     it('Should return "{ "CA 123456" : 1 }" from Cape Town with a total of 1 added' , function(){
    //         let registrAr = regFactory();

    //         registrAr.addRegNo('CA 123456');

    //         assert.deepEqual({ 'CA 123456': 1 }, registrAr.regNoAdded());
    //     });
    //     it('Should return "{ "CL 123-456" : 1 }", from Stellenbosch with a total of 1 added' , function(){
    //         let registrAr= regFactory();

    //         registrAr.addRegNo('cL 123-456');

    //         assert.deepEqual({ 'CL 123-456': 1 }, registrAr.regNoAdded());
    //     });
    //     it('Should return "{ "CF 123 456" : 1 }", from Kuilsriver with a total of 1 added' , function(){
    //         let Instantiate = regFactory();

    //         Instantiate.addRegNo('cf 123 456');

    //         assert.deepEqual({ 'CF 123 456': 1 }, Instantiate.regNoAdded());

    //     });
    //     it('Should return "{ "CJ 123 456" : 1 }", from Paarl with a total of 1 added' , function(){
    //         let Instantiate = regFactory();

    //         Instantiate.addRegNo('cJ 123 456');

    //         assert.deepEqual({ 'CJ 123 456': 1 }, Instantiate.regNoAdded());

    //     });
    //     it('Should return an empty object if the registration number format entered is invalid' , function(){
    //         let Instantiate= regFactory();

    //         Instantiate.addRegNo('CJ 123456789');

    //         assert.deepEqual({}, Instantiate.regNoAdded());

    //     });
    // });
