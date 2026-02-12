human_years = 2

if human_years==1:
    cat_years=15
    dog_years=15
    print([human_years, cat_years, dog_years])
elif human_years==2:
    cat_years=24
    dog_years=24
    print([human_years, cat_years, dog_years])
else:
    cat_years=24+(human_years-2)*4
    dog_years=24+(human_years-2)*5
    print([human_years, cat_years, dog_years])